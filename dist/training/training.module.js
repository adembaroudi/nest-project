"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainingModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/schemas/user.schema");
const training_schema_1 = require("./schemas/training.schema");
const training_controller_1 = require("./training.controller");
const training_service_1 = require("./training.service");
let trainingModule = class trainingModule {
};
trainingModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: "training", schema: training_schema_1.trainingsSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: "user", schema: user_schema_1.usersSchema }])
        ],
        controllers: [training_controller_1.trainingController],
        providers: [training_service_1.trainingService],
    })
], trainingModule);
exports.trainingModule = trainingModule;
//# sourceMappingURL=training.module.js.map