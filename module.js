/* Module Admin UI
============================================================= */

XXX.site.moduleAdminUI = {
	blocks: document.querySelectorAll('.module'),
	init: function() {
		if (!document.body.hasAttribute('data-entry-edit-url')) return;

		// Initialize each module
		XXX.site.moduleAdminUI.blocks.forEach(function(block) {
			var moduleMeta = block.querySelector('.module-meta');

			// Create Block Title
			var blockTitle = document.createElement('div');
			blockTitle.classList.add('block-title');
			blockTitle.innerHTML = moduleMeta.getAttribute('data-block-type');
			moduleMeta.appendChild(blockTitle);

			// Create Block Link
			var blockLink = document.createElement('a');
			blockLink.classList.add('block-link');
			blockLink.setAttribute('href', document.body.getAttribute('data-entry-edit-url') + '?block-id=' + moduleMeta.getAttribute('data-block-id'));
			blockLink.innerHTML = 'Edit';
			moduleMeta.appendChild(blockLink);
		});

		// Toggle on 'b' double press
		var waitingForKey = false;
		document.addEventListener('keydown', function(event) {
			if (event.which !== 66) return;

			if (waitingForKey) {
				waitingForKey = false;
				XXX.site.moduleAdminUI.toggle();
			} else {
				waitingForKey = true;
				setTimeout(function() {
					waitingForKey = false;
				}, 300);
			}

		});
	},
	toggle: function() {
		XXX.site.moduleAdminUI.blocks.forEach(function(block) {
			var moduleMeta = block.querySelector('.module-meta');
			moduleMeta.classList.toggle('visible');
		});
	},
};
