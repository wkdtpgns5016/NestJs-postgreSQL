FROM postgres:15-alpine

EXPOSE 5432

COPY /setup.sh setup.sh
CMD [ "bash", "setup.sh" ]

# CMD ["postgres", "-D", "/var/lib/postgresql/data", "-c", "listen_addresses=0.0.0.0"]