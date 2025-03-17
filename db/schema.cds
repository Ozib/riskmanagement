namespace RiskManagement;

using { BusinessPartnerA2X } from '../srv/external/BusinessPartnerA2X.cds';

entity Risk
{
    key ID : UUID;
    Title : String(100);
    prio : String(5);
    desc : String(100);
    impact : Integer;
    criticality : Integer;
    mitigations : Association to one Mitigations;
    supplier : Association to one BusinessPartnerA2X.A_BusinessPartner;
}

entity Mitigations
{
    key ID : UUID;
    createadAt : String(100);
    createdBy : String(100);
    description : String(100);
    owner : String(100);
    risk : Association to many Risk on risk.mitigations = $self;
}
