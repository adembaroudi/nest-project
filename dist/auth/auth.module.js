"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const training_schema_1 = require("../training/schemas/training.schema");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const serviceRegistration_schema_1 = require("./schemas/serviceRegistration.schema");
const trainingregistration_schema_1 = require("./schemas/trainingregistration.schema");
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const companyRegistrationSchema_1 = require("./schemas/companyRegistrationSchema");
const admin_schema_1 = require("./schemas/admin.schema");
const jwt_1 = require("@nestjs/jwt");
const forgetpassword_schema_1 = require("./schemas/forgetpassword.schema");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'trainingreg', schema: trainingregistration_schema_1.trainingRegSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "servicereg", schema: serviceRegistration_schema_1.serviceRegistrationSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "companyreg", schema: companyRegistrationSchema_1.companyRegistrationSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "training", schema: training_schema_1.trainingsSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "admin", schema: admin_schema_1.adminSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Forget', schema: forgetpassword_schema_1.ForgottenPasswordSchema }]),
            jwt_1.JwtModule.register({
                secretOrPrivateKey: 'thisismykickasssecretthatiwilltotallychangelater',
                signOptions: {
                    expiresIn: 3600
                }
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'upload'),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map