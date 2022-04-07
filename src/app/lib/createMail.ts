import { Email } from '../models/email';

export function createMailAddToCart(product) {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  const emailClient: Email = {
    clientEmail: email,
    subject: `${product.name} was added to your cart`,
    text: `
      <div style="font-family: Arial, Helvetica, sans-serif;">
        <b style="font-size: 2em;">Hello ${name}</b>
        <br>
        <p style="font-size: 1.4em;">You have added <b>${product.name}</b> to your shopping cart</p>
        <div style="border-radius: 8px; border: 3px solid yellow; padding: 20px; text-align: center;">
         <img style="width: 40%; image-rendering: pixelated;" src="${product.image}" alt="">
        </div>
      </div>
      `
  }

  return emailClient;
}

export function createMailBuy() {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");

  const emailClient: Email = {
    clientEmail: email,
    subject: `Your products request`,
    text: `
      <div style="font-family: Arial, Helvetica, sans-serif;">
        <b style="font-size: 2em;">Hello ${name}</b>
        <br>
        <p style="font-size: 1.4em;">Your requested <a href='http://localhost:4200/main/cart'>products</a> will be sended in a few days. Thanks for your preference</p>
      </div>
      `
  }

  return emailClient;
}
