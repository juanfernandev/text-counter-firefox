// Crear un menú contextual
browser.contextMenus.create({
    id: "countWordsAndChars",
    title: "Contar palabras y caracteres",
    contexts: ["selection"] // Solo aparece cuando hay texto seleccionado
});

// Manejar clics en el menú contextual
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "countWordsAndChars" && info.selectionText) {
        const text = info.selectionText.trim();
        const wordCount = text.split(/\s+/).filter(Boolean).length; // Contar palabras
        const charCount = text.length; // Contar caracteres

        // Inyectar script en la pestaña activa para mostrar alerta
        browser.tabs.executeScript(tab.id, {
            code: `alert("Palabras: ${wordCount}\\nCaracteres: ${charCount}");`
        });
    }
});