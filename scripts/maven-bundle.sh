#!/usr/bin/env bash
# Arma el bundle que exige Maven Central (Central Portal) para un SDK de Java:
# jar, pom, -sources y -javadoc, cada uno con su firma .asc y sus checksums
# .md5/.sha1, en la ruta <groupId>/<artifactId>/<version>/ dentro de un zip.
#
#   MAVEN_GPG_KEY="$(cat llave-privada.asc)" MAVEN_GPG_PASSPHRASE=… \
#     ./scripts/maven-bundle.sh packages/java salida.zip
#
# La firma la hace maven-gpg-plugin con el firmante BouncyCastle (-Dgpg.signer=bc),
# que lee la llave armada y su contraseña de MAVEN_GPG_KEY / MAVEN_GPG_PASSPHRASE:
# no hace falta el binario gpg ni un keyring en la máquina.
set -euo pipefail

JAVA_DIR="$(cd "$1" && pwd)"
OUT="$(cd "$(dirname "$2")" && pwd)/$(basename "$2")"
: "${MAVEN_GPG_KEY:?Falta MAVEN_GPG_KEY (llave privada armada)}"
: "${MAVEN_GPG_PASSPHRASE:?Falta MAVEN_GPG_PASSPHRASE}"

cd "$JAVA_DIR"
# La primera aparición de cada etiqueta es la del proyecto (el pom generado no
# tiene <parent>).
pom_value() { grep -m1 "<$1>" pom.xml | sed -E "s#.*<$1>([^<]*)</$1>.*#\1#"; }
GROUP="$(pom_value groupId)"
ARTIFACT="$(pom_value artifactId)"
VERSION="$(pom_value version)"
echo "==> $GROUP:$ARTIFACT:$VERSION"

mvn -B -q -DskipTests -P sign-artifacts -Dgpg.signer=bc verify

STAGE="$(mktemp -d)"
DEST="$STAGE/$(echo "$GROUP" | tr . /)/$ARTIFACT/$VERSION"
mkdir -p "$DEST"
cp pom.xml "$DEST/$ARTIFACT-$VERSION.pom"
cp "target/$ARTIFACT-$VERSION.pom.asc" "$DEST/"
for classifier in "" -sources -javadoc; do
  cp "target/$ARTIFACT-$VERSION$classifier.jar" "target/$ARTIFACT-$VERSION$classifier.jar.asc" "$DEST/"
done

cd "$DEST"
for f in *.jar *.pom; do
  # Central sólo pide md5 y sha1; el contenido del archivo es el hash, sin nombre.
  openssl dgst -md5 -r "$f" | cut -d' ' -f1 > "$f.md5"
  openssl dgst -sha1 -r "$f" | cut -d' ' -f1 > "$f.sha1"
done

rm -f "$OUT"
(cd "$STAGE" && zip -q -r "$OUT" .)
rm -rf "$STAGE"
echo "OK: $OUT"
unzip -l "$OUT" | awk 'NR>3 && $4 {print "    " $4}'
