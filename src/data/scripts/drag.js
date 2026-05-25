function makeDraggable(parentSelector, handleSelector) {
    const parents = document.querySelectorAll(parentSelector);

    parents.forEach((parent) => {
        const handle = parent.querySelector(handleSelector);
        
        if (!handle) return; 
        
        let isDragging = false;
        let offsetX, offsetY;

        handle.addEventListener('pointerdown', (e) => {
            if (e.target.closest('label')) {
                return; 
            }

            isDragging = true;
            const rect = parent.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            handle.setPointerCapture(e.pointerId);
        });

        handle.addEventListener('pointermove', (e) => {
            if (!isDragging) return;

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            const minX = 0;
            const minY = 29;
            const maxX = window.innerWidth - parent.offsetWidth;
            const maxY = window.innerHeight - parent.offsetHeight - 29;

            newX = Math.max(minX, Math.min(newX, maxX));
            newY = Math.max(minY, Math.min(newY, maxY));

            parent.style.left = `${newX}px`;
            parent.style.top = `${newY}px`;
        });

        handle.addEventListener('pointerup', (e) => {
            isDragging = false;
            handle.releasePointerCapture(e.pointerId);
        });
    });
}

makeDraggable('.window', '.titlebar');
