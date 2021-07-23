export default class QueryController {
	url: string;

	constructor() {
		this.url = "url";
	}

	getItems({ search }: GetItemsProps): HardwareData[] {
		return tableData.filter((item) => {
			return item.name.includes(search);
		});
	}

	getItem() {
		return null;
	}
}

interface GetItemsProps {
	search: string;
	page: number;
}

export interface HardwareData {
	name: string;
	identifier: string;
	repository: string;
	version: string;
	license: string;
	organization: string;
	language: string;
	tsdcId: number;
}

const tableData: HardwareData[] = [
	{
		name: "in hac",
		identifier:
			"https://latimes.com/habitasse/platea/dictumst/aliquam/augue.json?",
		repository: "in",
		version: "0.73",
		license: "donec",
		organization: "Lakin, Ondricka and Thiel",
		language: "Maltese",
		tsdcId: 1,
	},
	{
		name: "imperdiet",
		identifier:
			"http://unc.edu/tristique.html?velit=quis&vivamus=tortor&vel=id&nul",
		repository: "mattis",
		version: "6.0",
		license: "etiam",
		organization: "Orn Inc",
		language: "Greek",
		tsdcId: 2,
	},
	{
		name: "volutpat",
		identifier: "http://google.pl/non/lec",
		repository: "at",
		version: "1.09",
		license: "ut",
		organization: "Gutkowski LLC",
		language: "Danish",
		tsdcId: 3,
	},
	{
		name: "sit",
		identifier: "https://ameblo.jp/in/blandit/ultrices/enim/lor",
		repository: "nunc",
		version: "0.19",
		license: "ligula",
		organization: "Bernhard-Kuhn",
		language: "Kashmiri",
		tsdcId: 4,
	},
	{
		name: "justo sit",
		identifier:
			"https://miitbeian.gov.cn/nulla.aspx?bibendum=venenatis&morbi=tri",
		repository: "at",
		version: "1.7",
		license: "erat",
		organization: "Kunze, Dickinson and Zboncak",
		language: "Spanish",
		tsdcId: 5,
	},
	{
		name: "nunc nisl",
		identifier: "https://epa.gov/fusce/congue/diam.html?",
		repository: "nulla",
		version: "2.5.1",
		license: "lacus",
		organization: "Green Group",
		language: "Hiri Motu",
		tsdcId: 6,
	},
	{
		name: "nisi",
		identifier: "https://google.com.br/euismod/scelerisque/quam/turpis",
		repository: "in",
		version: "0.4.6",
		license: "nulla",
		organization: "Brakus and Sons",
		language: "Maltese",
		tsdcId: 7,
	},
	{
		name: "mi nulla",
		identifier: "http://google.co.jp/at/velit.json?aliquam",
		repository: "morbi",
		version: "7.6",
		license: "tortor",
		organization: "Ernser-Gorczany",
		language: "Danish",
		tsdcId: 8,
	},
	{
		name: "odio",
		identifier: "http://netlog.com/turpis/adipiscing/lorem/v",
		repository: "quam",
		version: "8.5",
		license: "quisque",
		organization: "Doyle and Sons",
		language: "Nepali",
		tsdcId: 9,
	},
	{
		name: "est",
		identifier:
			"https://mysql.com/risus/dapibus.js?consequat=libero&lectus=convallis&in=eget&est=eleifend&risus=luctus&auctor=ultricies&sed=eu&tristique=nibh&",
		repository: "quis",
		version: "0.30",
		license: "quam",
		organization: "Denesik Group",
		language: "Nepali",
		tsdcId: 10,
	},
];
