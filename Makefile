install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gdc:
	node bin/brain-gdc.js
brain-progression:
	node bin/brain-progression.js