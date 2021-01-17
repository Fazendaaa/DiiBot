REPO_OWNER:=fazenda
PROJECT:=diibot
MULTIARCH:=false
ARCHS:=linux/amd64
VERSION:=latest

ifeq (true, $(MULTIARCH))
	ARCHS:=linux/amd64,linux/arm/v7,linux/arm64/v8
endif

build:
	@docker buildx build \
	$(ENV) \
	--platform $(ARCHS) \
	--push --tag $(REPO_OWNER)/$(PROJECT):$(VERSION) .

setup:
	@./buildx.sh

dev:
	@docker run -it --rm \
	--user $(shell id -u) \
	--volume $(shell pwd):/usr/src/app \
	--workdir /usr/src/app \
	node:14.15.4-slim \
	/bin/sh
