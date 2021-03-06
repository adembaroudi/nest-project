import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { Model } from "mongoose";

import * as bcrypt from "bcryptjs";
import { User } from "../user/user.model";
import { UserDto } from "../user/dto/user.dto";

@Injectable()
export class userService {
  private user: User[] = [];
  constructor(@InjectModel("user") private readonly userModel: Model<User>) {}

  async addUser(userDto: UserDto): Promise<any> {
    const user = await this.userModel.findOne({ email: userDto.email });
    if (user) {
      return null;
    }
    const salt = 10;
    userDto.password = await bcrypt.hash(userDto.password, salt);
    const newUser = await  this.userModel.create(userDto);
    return newUser;
  }
  async getAllUsers(): Promise<User> {
    const allUsers = await this.userModel.find();
    return allUsers;
  }
  async getUserById(id: String): Promise<any> {
    const userId = await this.userModel.findById(id);
    return userId;
  }
  async updatePartenaire(id :String , userDto : UserDto):Promise<User>{
    const updateUser = await this.userModel.findByIdAndUpdate(id , userDto);
    return updateUser;
}
  async deleteUser(id: String): Promise<User> {
    const userToDelete = await this.userModel.findByIdAndDelete(id);
    return userToDelete;
  }
  async logoUserPic(file, id) {
    return await this.userModel.findOneAndUpdate({ _id: id }, { $set: { img: file } }).exec();
}
async getLogo(id):Promise<User>{
  const User = await this.userModel.findById(id)
  const getLogo = User.img 
  return getLogo;
}
}