const fromAmtElement = document.querySelector('.amount');
const convertedAmtElement = document.querySelector('.convertedAmount');
const fromCurrElement = document.querySelector('.fromCurrency');
const toCurrElement = document.querySelector('.toCurrency');
const result = document.querySelector('.result');
const converterContainer = document.querySelector('.converter-container');

//Array to populate the select tags with these countries
const countries = [
    {code: "AED", name: "United Arab Emirates Dirham"},
    {code: "AFN", name: "Afghan Afghani"},
    {code: "ALL", name: "Albanian Lek"},
    {code: "AMD", name: "Armenian Dram"},
    {code: "ANG", name: "Netherlands Antillean Guilder"},
    {code: "AOA", name: "Angolan Kwanza"},
    {code: "ARS", name: "Argentine Peso"},
    {code: "AUD", name: "Australian Dollar"},
    {code: "AWG", name: "Aruban Florin"},
    {code: "AZN", name: "Azerbaijani Manat"},
    {code: "BAM", name: "Bosnia-Herzegovina Convertible Mark"},
    {code: "BBD", name: "Barbadian Dollar"},
    {code: "BDT", name: "Bangladeshi Taka"},
    {code: "BGN", name: "Bulgarian Lev"},
    {code: "BHD", name: "Bahraini Dinar"},
    {code: "BIF", name: "Burundian Franc"},
    {code: "BMD", name: "Bermudian Dollar"},
    {code: "BND", name: "Brunei Dollar"},
    {code: "BOB", name: "Bolivian Boliviano"},
    {code: "BRL", name: "Brazilian Real"},
    {code: "BSD", name: "Bahamian Dollar"},
    {code: "BTN", name: "Bhutanese Ngultrum"},
    {code: "BWP", name: "Botswana Pula"},
    {code: "BYN", name: "Belarusian Ruble"},
    {code: "BZD", name: "Belize Dollar"},
    {code: "CAD", name: "Canadian Dollar"},
    {code: "CDF", name: "Congolese Franc"},
    {code: "CHF", name: "Swiss Franc"},
    {code: "CLP", name: "Chilean Peso"},
    {code: "CNY", name: "Chinese Yuan"},
    {code: "COP", name: "Colombian Peso"},
    {code: "CRC", name: "Costa Rican Colón"},
    {code: "CUP", name: "Cuban Peso"},
    {code: "CVE", name: "Cape Verdean Escudo"},
    {code: "CZK", name: "Czech Koruna"},
    {code: "DJF", name: "Djiboutian Franc"},
    {code: "DKK", name: "Danish Krone"},
    {code: "DOP", name: "Dominican Peso"},
    {code: "DZD", name: "Algerian Dinar"},
    {code: "EGP", name: "Egyptian Pound"},
    {code: "ERN", name: "Eritrean Nakfa"},
    {code: "ETB", name: "Ethiopian Birr"},
    {code: "EUR", name: "Euro"},
    {code: "FJD", name: "Fijian Dollar"},
    {code: "FKP", name: "Falkland Islands Pound"},
    {code: "FOK", name: "Faroese Króna"},
    {code: "GBP", name: "British Pound Sterling"},
    {code: "GEL", name: "Georgian Lari"},
    {code: "GGP", name: "Guernsey Pound"},
    {code: "GHS", name: "Ghanaian Cedi"},
    {code: "GIP", name: "Gibraltar Pound"},
    {code: "GMD", name: "Gambian Dalasi"},
    {code: "GNF", name: "Guinean Franc"},
    {code: "GTQ", name: "Guatemalan Quetzal"},
    {code: "GYD", name: "Guyanese Dollar"},
    {code: "HKD", name: "Hong Kong Dollar"},
    {code: "HNL", name: "Honduran Lempira"},
    {code: "HRK", name: "Croatian Kuna"},
    {code: "HTG", name: "Haitian Gourde"},
    {code: "HUF", name: "Hungarian Forint"},
    {code: "IDR", name: "Indonesian Rupiah"},
    {code: "ILS", name: "Israeli New Shekel"},
    {code: "IMP", name: "Isle of Man Pound"},
    {code: "INR", name: "Indian Rupee"},
    {code: "IQD", name: "Iraqi Dinar"},
    {code: "IRR", name: "Iranian Rial"},
    {code: "ISK", name: "Icelandic Króna"},
    {code: "JEP", name: "Jersey Pound"},
    {code: "JMD", name: "Jamaican Dollar"},
    {code: "JOD", name: "Jordanian Dinar"},
    {code: "JPY", name: "Japanese Yen"},
    {code: "KES", name: "Kenyan Shilling"},
    {code: "KGS", name: "Kyrgyzstani Som"},
    {code: "KHR", name: "Cambodian Riel"},
    {code: "KID", name: "Kiribati Dollar"},
    {code: "KMF", name: "Comorian Franc"},
    {code: "KRW", name: "South Korean Won"},
    {code: "KWD", name: "Kuwaiti Dinar"},
    {code: "KYD", name: "Cayman Islands Dollar"},
    {code: "KZT", name: "Kazakhstani Tenge"},
    {code: "LAK", name: "Lao Kip"},
    {code: "LBP", name: "Lebanese Pound"},
    {code: "LKR", name: "Sri Lankan Rupee"},
    {code: "LRD", name: "Liberian Dollar"},
    {code: "LSL", name: "Lesotho Loti"},
    {code: "LYD", name: "Libyan Dinar"},
    {code: "MAD", name: "Moroccan Dirham"},
    {code: "MDL", name: "Moldovan Leu"},
    {code: "MGA", name: "Malagasy Ariary"},
    {code: "MKD", name: "Macedonian Denar"},
    {code: "MMK", name: "Burmese Kyat"},
    {code: "MNT", name: "Mongolian Tögrög"},
    {code: "MOP", name: "Macanese Pataca"},
    {code: "MRU", name: "Mauritanian Ouguiya"},
    {code: "MUR", name: "Mauritian Rupee"},
    {code: "MVR", name: "Maldivian Rufiyaa"},
    {code: "MWK", name: "Malawian Kwacha"},
    {code: "MXN", name: "Mexican Peso"},
    {code: "MYR", name: "Malaysian Ringgit"},
    {code: "MZN", name: "Mozambican Metical"},
    {code: "NAD", name: "Namibian Dollar"},
    {code: "NGN", name: "Nigerian Naira"},
    {code: "NIO", name: "Nicaraguan Córdoba"},
    {code: "NOK", name: "Norwegian Krone"},
    {code: "NPR", name: "Nepalese Rupee"},
    {code: "NZD", name: "New Zealand Dollar"},
    {code: "OMR", name: "Omani Rial"},
    {code: "PAB", name: "Panamanian Balboa"},
    {code: "PEN", name: "Peruvian Sol"},
    {code: "PGK", name: "Papua New Guinean Kina"},
    {code: "PHP", name: "Philippine Peso"},
    {code: "PKR", name: "Pakistani Rupee"},
    {code: "PLN", name: "Polish Złoty"},
    {code: "PYG", name: "Paraguayan Guaraní"},
    {code: "QAR", name: "Qatari Riyal"},
    {code: "RON", name: "Romanian Leu"},
    {code: "RSD", name: "Serbian Dinar"},
    {code: "RUB", name: "Russian Ruble"},
    {code: "RWF", name: "Rwandan Franc"},
    {code: "SAR", name: "Saudi Riyal"},
    {code: "SBD", name: "Solomon Islands Dollar"},
    {code: "SCR", name: "Seychellois Rupee"},
    {code: "SDG", name: "Sudanese Pound"},
    {code: "SEK", name: "Swedish Krona"},
    {code: "SGD", name: "Singapore Dollar"},
    {code: "SHP", name: "Saint Helena Pound"},
    {code: "SLE", name: "Sierra Leonean Leone"},
    {code: "SLL", name: "Sierra Leonean Leone (Old)"},
    {code: "SOS", name: "Somali Shilling"},
    {code: "SRD", name: "Surinamese Dollar"},
    {code: "SSP", name: "South Sudanese Pound"},
    {code: "STN", name: "São Tomé and Príncipe Dobra"},
    {code: "SYP", name: "Syrian Pound"},
    {code: "SZL", name: "Eswatini Lilangeni"},
    {code: "THB", name: "Thai Baht"},
    {code: "TJS", name: "Tajikistani Somoni"},
    {code: "TMT", name: "Turkmenistani Manat"},
    {code: "TND", name: "Tunisian Dinar"},
    {code: "TOP", name: "Tongan Paʻanga"},
    {code: "TRY", name: "Turkish Lira"},
    {code: "TTD", name: "Trinidad and Tobago Dollar"},
    {code: "TVD", name: "Tuvaluan Dollar"},
    {code: "TWD", name: "New Taiwan Dollar"},
    {code: "TZS", name: "Tanzanian Shilling"},
    {code: "UAH", name: "Ukrainian Hryvnia"},
    {code: "UGX", name: "Ugandan Shilling"},
    {code: "USD", name: "United States Dollar"},
    {code: "UYU", name: "Uruguayan Peso"},
    {code: "UZS", name: "Uzbekistani Som"},
    {code: "VES", name: "Venezuelan Bolívar Soberano"},
    {code: "VND", name: "Vietnamese đồng"},
    {code: "VUV", name: "Vanuatu Vatu"},
    {code: "WST", name: "Samoan Tālā"},
    {code: "XAF", name: "Central African CFA Franc"},
    {code: "XCD", name: "Eastern Caribbean Dollar"},
    {code: "XDR", name: "Special Drawing Rights"},
    {code: "XOF", name: "West African CFA Franc"},
    {code: "XPF", name: "CFP Franc"},
    {code: "YER", name: "Yemeni Rial"},
    {code: "ZAR", name: "South African Rand"},
    {code: "ZMW", name: "Zambian Kwacha"},
    {code: "ZWL", name: "Zimbabwean Dollar"}
];    

//Showing countries from array to select tag
countries.forEach(country =>{
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');

    option1.value  = option2.value = country.code;
    option1.textContent  = option2.textContent = `${country.code} (${country.name})`;

    fromCurrElement.appendChild(option1);
    toCurrElement.appendChild(option2);

    //setting default values of select tag
    fromCurrElement.value = "USD";
    toCurrElement.value = "INR";
});

//Function to get exchage rate using API
const getExchangeRate = async () => {
    const amount = parseFloat(fromAmtElement.value);
    const fromCurr = fromCurrElement.value;
    const toCurr = toCurrElement.value;
    result.textContent = "Fetching Exchange Rates...";

    //Fetch data from API
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/deb1591fa8d4e089f5e794e2/latest/${fromCurr}`);
        const data = await response.json();

        const conversionRate = data.conversion_rates[toCurr];
        const convertedAmount = (amount*conversionRate).toFixed(2);
        
        if(typeof conversionRate === `undefined`){
            result.textContent = "Exchange rate data not avaliable for selected countries";
            convertedAmtElement = "";
        }else{
            convertedAmtElement.value = convertedAmount;

            result.textContent = `${amount} ${fromCurr} = ${convertedAmount} ${toCurr}`
        }

    } catch (error) {
        converterContainer.innerHTML = `<h2>ERROR while fetching exchange rates</h2>`;
    }
}

//Fetching xchange rate when user inputs the amount
fromAmtElement.addEventListener('input',getExchangeRate);

//Fetching xchange rate when user changes currency
fromCurrElement.addEventListener('change',getExchangeRate);
toCurrElement.addEventListener('change',getExchangeRate);
window.addEventListener('load',getExchangeRate);
