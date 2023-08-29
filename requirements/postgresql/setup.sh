#!/bin/bash
## 데이터베이스 데이터 권한 지정
chmod 0700 /var/lib/postgresql/data
chown postgres /var/lib/postgresql/data

## 데이터베이스 초기화
su -c "initdb /var/lib/postgresql/data" postgres

## 설정 파일 초기화
echo "host all  all    0.0.0.0/0  md5" >> /var/lib/postgresql/data/pg_hba.conf &&\
echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf &&\
echo "CONFIG FILE CREATED"

## 데이버베이스 서버 시작
su -c "pg_ctl start" postgres

## 데이터베이스 생성 및 유저 비밀번호 초기화
SELECT_DB_QURREY="psql -c \"SELECT 1 FROM pg_database WHERE datname = 'main'\""
CREATE_DB_QURREY="psql -c \"CREATE DATABASE main\""
DB_QURREY="$SELECT_DB_QURREY | grep -q 1 || $CREATE_DB_QURREY"

MODIFY_PASSWD_QURREY="psql -c \"alter user postgres with password '1234'\""

su - postgres -c "$DB_QURREY"
su - postgres -c "$MODIFY_PASSWD_QURREY"

## 재구동
su -c "pg_ctl stop" postgres
su -c "postgres -D /var/lib/postgresql/data" postgres
