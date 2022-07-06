/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const map = new CustomMap(document.getElementById('map')!);

console.log("User's location: ", user.location);
console.log("Company's location: ", company.location);

// User and Company classes satisfy Mappable interface
map.setLocation(user);
map.setMarker(user);
map.setMarker(company);
