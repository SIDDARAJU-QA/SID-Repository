import { test as base } from "./loginf.js";
import { leadpage } from "../Pages/lead.js";
import { contactpage } from "../Pages/contact.js";
import { organizationpage } from "../Pages/organization.js";

export const test = base.extend({

  leads: async ({ loginadmin }, use) => {
    const lead = new leadpage(loginadmin);
    await use(lead);
  },

  contacts: async ({ loginadmin }, use) => {
    const contact = new contactpage(loginadmin);
    await use(contact);
  },

  organization1: async ({ loginadmin }, use) => {
    const organizationdata = new organizationpage(loginadmin);
    await use(organizationdata);
  }

});