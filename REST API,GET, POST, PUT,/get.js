const URL = "https://6849a33445f4c0f5ee724f2c.mockapi.io/products";

async function getProduct() {
  try {
    const res = await fetch(URL);
    const praducts = await res.json();
    return praducts;
  } catch (error) {
    console.log("eror chiqadi", error);
  }
}
async function korsat() {
  const products = await getProduct();
  console.log(products);
}
// korsat();

async function productById(id) {
  try {
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// productById(5);




async function addProduct(praduct) {
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(praduct),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("eror ciqadi", error);
  }
}

// addProduct({
//     title: 'naushnik',
//     price: 200,
//     quantity: 4,
//     category: 'acsesuar'
// });

async function updateProduct(id, praduct) {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(praduct),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
}

// updateProduct(3, {
//     title: "noutbook",
// });

async function removeProduct(id) {
  try {
    await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    console.log(`${id}-praduct royxattdan uchdi`);
  } catch (error) {
    console.log("eror ciq", error);
  }
}

// removeProduct(8)
// korsat();

async function productSearch(soz) {
    const products = await getProduct();

    const natija = products.filter(product =>
        product.title.includes(soz)
    );

    console.log("mahsulot-", natija);
}
// productSearch('samsung')


async function productCategory() {
  const products = await getProduct();

  const natija = products.sort((a, b) => {
    return a.category.localeCompare(b.category);
  });


  console.log("category boyicha sortlash-", natija);
}
productCategory();


async function productPrice() {
  const products = await getProduct();

  const natija = products.sort((a, b) => {
    return b.price - a.price;
  });

  console.log("narxi boyicha sortlash-", natija);
}
productPrice();

async function getPriceSort(a, b) {
  const products = await getProduct();

  const natija = products.filter((praduct) => praduct.price >= a && praduct.price <= b);

  console.log(`narx ${a} - ${b} gacha`, natija);
}
getPriceSort(300,500)