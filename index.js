const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      await listContacts().then((data) => console.table(data));
      break;

    case "get":
      console.table(await getContactById(id));
      break;

    case "add":
      console.table(await addContact(name, email, phone));
      break;

    case "remove":
      await removeContact(id);
      await listContacts().then((data) => console.table(data));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
