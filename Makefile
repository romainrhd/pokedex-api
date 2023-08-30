ifeq ($(OS),Windows_NT) # is Windows_NT on XP, 2000, 7, Vista, 10...
	DETECTED_OS := Windows
else ifeq ($(shell uname -s),Darwin)
	DETECTED_OS := OSX
else
	DETECTED_OS := $(shell uname -s)
endif

start:
	docker compose up -d

stop:
	docker compose down --remove-orphans

restart: stop start

init-db:
	yarn migration:run