async function translateText() {
  const input = document.getElementById("kiritish").value;
  const source = document.getElementById("tarjima").value;
    const target = document.getElementById("qadam").value;
    

  try {
    const res = await fetch("https://libretranslate.online/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: input,
        source: source,
        target: target,
        format: "text",
      }),
    });

    const data = await res.json();
    document.getElementById("chiqarish").value = data.translatedText;

    console.log("Tarjima:", data.translatedText);
  } catch (error) {
    console.error("Xatolik:", error);
  }
}
