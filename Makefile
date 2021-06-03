
setup_test_env:
	docker build -t flickr_frontend/test -f ./Dockerfile.test .

run_tests:
	docker run -e CI=true flickr_frontend/test

test: setup_test_env run_tests

.PHONY: test
.PHONY: setup_test_env
.PHONY: run_tests