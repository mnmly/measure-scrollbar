build: components index.js
	@component build --dev

components:
	@component install --dev

clean:
	rm -fr build components

.PHONY: clean test