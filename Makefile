
setup_e2e_test_env:
	docker-compose -f docker-compose.e2e-test.yml build

run_e2e_tests:
	docker-compose -f docker-compose.e2e-test.yml up --exit-code-from test --abort-on-container-exit

post_run_e2e_tests:
	docker-compose -f docker-compose.e2e-test.yml down

e2e_test: setup_e2e_test_env run_e2e_tests post_run_e2e_tests

setup_unit_test_env:
	docker build -t flickr_frontend/test -f ./Dockerfile.test .

run_unit_tests:
	docker run -e CI=true flickr_frontend/test

unit_test: setup_test_env run_tests

.PHONY: unit_test
.PHONY: setup_unit_test_env
.PHONY: run_unit_tests

.PHONY: e2e_test
.PHONY: setup_e2e_test_env
.PHONY: run_e2e_tests
.PHONY: post_run_e2e_tests