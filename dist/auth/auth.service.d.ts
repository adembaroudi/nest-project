import { company, service } from "./auth.model";
import { Model } from "mongoose";
import { trainingReg } from "./interfaces/trainingreg.interace";
import { trainingRegistrationDto } from "./Dto/trainingregistration.dto";
import { serviceRegistrationDto } from "./Dto/serviceRegistration.dto";
import { Training } from "src/training/training.model";
import { companyRegDto } from "./Dto/companyRegDto.dto";
export declare class AuthService {
    private readonly trainingModel;
    private readonly serviceRegmodel;
    private readonly companyRegmodel;
    private readonly trainModel;
    private training;
    private serviceRegistration;
    private companyRegistration;
    constructor(trainingModel: Model<trainingReg>, serviceRegmodel: Model<service>, companyRegmodel: Model<company>, trainModel: Model<Training>);
    trainingReg(trainingRegDto: trainingRegistrationDto, id: String): Promise<any>;
    trainingRegWithoutAffectation(trainingRegDto: trainingRegistrationDto): Promise<any>;
    serviceReg(serviceRegDto: serviceRegistrationDto): Promise<any>;
    companyReg(companyRegDto: companyRegDto): Promise<any>;
    getAllRgistrations(): Promise<any>;
    pdfFile(file: any, id: any): Promise<service>;
    getpdf(id: any): Promise<service>;
}
