"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const training_model_1 = require("../training/training.model");
let AuthService = class AuthService {
    constructor(trainingModel, serviceRegmodel, trainModel) {
        this.trainingModel = trainingModel;
        this.serviceRegmodel = serviceRegmodel;
        this.trainModel = trainModel;
        this.training = [];
        this.serviceRegistration = [];
    }
    async trainingReg(id, trainingRegDto) {
        const training = await this.trainingModel.findOne({ email: trainingRegDto.email });
        if (training) {
            return null;
        }
        const trainingreg = await new this.trainingModel(trainingRegDto);
        const formation = await this.trainModel.findByIdAndUpdate(id, {
            $push: { trainingreg: trainingreg._id },
        }, {
            new: true,
        });
        await this.trainModel.findByIdAndUpdate(training._id, { formation: formation._id });
        return formation;
    }
    async serviceReg(serviceRegDto) {
        const service = await this.serviceRegmodel.findOne({ email: serviceRegDto.email });
        if (service) {
            return null;
        }
        const serviceReg = await new this.serviceRegmodel(serviceRegDto);
        return serviceReg.save();
    }
    async getAllRgistrations() {
        const allreg = await this.serviceRegmodel.find();
        return allreg;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('trainingreg')),
    __param(1, mongoose_1.InjectModel('servicereg')),
    __param(2, mongoose_1.InjectModel('training')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map