import { Injectable, Module } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact } from "./contact.model";
import { Model } from "mongoose";
import * as nodemailer from "nodemailer";
import { ContactDto } from "./dto/contact.dto";

@Injectable()
export class contactService {
  private contact: Contact[] = [];

  constructor(
    @InjectModel("contact") private readonly contactModel: Model<Contact>
  ) {}
  async addMessage(contactDto: ContactDto) {
    const message = await this.contactModel.create(contactDto);
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      tls: {
        rejectUnauthorized: false,
      },
      port: 465,
      secure: false,
      auth: {
        user: "crmproject.2020@gmail.com",
        pass: "123456789crm",
      },
    });
    const mailOptions = {
      to: "adembaroudi3177@gmail.com",
      from: "crmproject.2020@gmail.com",
      subject: contactDto.subject,
      html: `<ul><h5>this email is from : <p>${contactDto.name}</p></h5><li>email: ${contactDto.email}</li><li>Contenu de message:${contactDto.contenuMessage}</li></ul>`,
    };
    const sended = await new Promise<boolean>(async function (resolve, reject) {
      return await transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          console.log("Message sent: %s", error);
          return reject(false);
        }
        console.log("Message sent 1 : %s", info);
        resolve(true);
      });
    });
    return sended;
  }
  async getAllMsgs(): Promise<Contact> {
    const getMsgs = await this.contactModel.find();
    return getMsgs;
  }
  async getMsgsById(id: String): Promise<Contact> {
    const msgId = await this.contactModel.findById(id);
    return msgId;
  }
  async updateMsg(id: String, contactDto: ContactDto): Promise<Contact> {
    const upMsg = await this.contactModel.findByIdAndUpdate(id, contactDto);
    return upMsg;
  }
  async deleteMsg(id: String): Promise<Contact> {
    const msgToDelete = await this.contactModel.findByIdAndDelete(id);
    return msgToDelete;
  }
}
