export function contactLoad() {
  const content = document.getElementById("content");

  const contactHeader = document.createElement("header");
  const contactHeaderNode = document.createTextNode("Contact");
  contactHeader.appendChild(contactHeaderNode);
  content.appendChild(contactHeader);

  const contact = document.createElement("div");
  const contactTextNode = document.createTextNode("Phone Number: 111-111-1111");
  const brNode = document.createElement("br");
  const emailTextNode = document.createTextNode("Email: support@gusteau.com");
  contact.appendChild(contactTextNode);
  contact.appendChild(brNode);
  contact.appendChild(emailTextNode);
  content.appendChild(contact);

  const css = document.createElement("style");
  css.textContent = `
    #content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5em;
    }

    #content div {
      width: 200px;
      text-align: center;
    }
  `;

  document.head.appendChild(css);
}