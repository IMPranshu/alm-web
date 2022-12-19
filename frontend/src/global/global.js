import React, {useState} from "react";
import { newNegativeAttributeFilter,newPositiveAttributeFilter } from "@gooddata/sdk-model";
import * as Md from "../md/full";


const [typeFilter, setTypeFilter] = useState(newPositiveAttributeFilter(Md.LoanStartMonthYear, { uris: ["April-2022"] }));
const [loantermFilter, setLoantermFilter] = useState(newPositiveAttributeFilter(Md.LoantermBins, { uris: ["0-70","71-80","81-90"] }));

export {typeFilter,setTypeFilter,loantermFilter,setLoantermFilter}