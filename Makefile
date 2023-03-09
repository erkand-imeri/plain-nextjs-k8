info: usage

PWD := $(shell pwd)

usage:
	@echo " make package            Generates a Zendesk App package."

test: do_tests
build: do_build
run: do_run
down: do_stop

do_tests:
	docker run -w=/app -v=$(PWD):/app node:16-alpine yarn test
do_build:
	docker compose build
do_run:
	docker compose up
do_stop:
	docker compose down
	