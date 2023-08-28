#!/bin/bash
chmod 777 /var/lib/postgresql/data
chown postgres /var/lib/postgresql/data

su -c "initdb /var/lib/postgresql/data" postgres
su -c "pg_ctl start" postgres

echo "host all  all    0.0.0.0/0  md5" >> /var/lib/postgresql/data/pg_hba.conf &&\
echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf &&\
echo "conf file success"

exec /bin/bash
# SELECT_QURREY="SELECT 1 FROM pg_database WHERE datname = main"
# CREATE_QURREY="CREATE DATABASE main"

# NEW_DB_BIN='psql -U postgres -tc $SELECT_QURREY | grep -q 1 || psql -U postgres -c $CREATE_QURREY'
# PASSWD_BIN='psql -c "ALTER USER postgres WITH ENCRYPTED PASSWORD 1234;"'
# POSTGRES_BIN='postgres -D /var/lib/postgresql/data -c listen_addresses=0.0.0.0'

# su - postgres -c 'psql -U postgres -tc $SELECT_QURREY | grep -q 1 || psql -U postgres -c $CREATE_QURREY'
# su -c $PASSWD_BIN postgres
# echo "success"

# su -c $POSTGRES_BIN postgres

su - postres -c 'psql -d main