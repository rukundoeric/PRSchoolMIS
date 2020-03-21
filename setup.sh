
PGPORT=5432
PGHOST="localhost"
PGUSER="postgres"
DEV_PGDB="dev_prschoolmis"
Template="template0"
createdb -h $PGHOST -T $Template   -p $PGPORT -U $PGUSER $DEV_PGDB
touch .env
cat >> .env << EOF
DEV_DATABASE_URL=postgres:postgres@localhost:5432/dev_prschoolmis
EOF
yarn install