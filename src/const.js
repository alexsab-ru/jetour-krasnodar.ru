import { phoneFormat } from '@/js/utils/numbers.format';
import { LAST_DAY, MONTH, YEAR } from '@/js/utils/date';
// Название сайта по умолчанию
export const SITE_NAME = 'Автохолдинг';
// Юр лицо
export const LEGAL_ENTITY = 'ООО «Автохолдинг Ф»';
// ИНН
export const LEGAL_INN = '2308194419';
// Город
export const LEGAL_CITY = 'г. Краснодар';
// где? в Городе
export const LEGAL_CITY_WHERE = 'Краснодаре';
// Описание сайта по умолчанию
export const SITE_DESCR = 'Официальный дилерский центр Джетур в Краснодаре';
// Телефон по умолчанию
export const PHONE = '+7 (861) 992-02-02';
// Бренд
export const BRAND = 'Jetour';
// Конечное время для таймера
//string 2025-12-31T23:59:59+04:00
export const TIMER = { title: 'До конца акции осталось',subtitle: '', endtime: `${YEAR}-${MONTH}-${LAST_DAY}T23:59:59+04:00`, btnName: 'Зафиксировать цену', show: false };
// Объект для бегущей строки
export const MARQUEE = { title: `Тотальная распродажа до ${LAST_DAY}.${MONTH}.${YEAR}`, count: 8, speed: 20, show: false };
// Ссылка яндекс-виджета
export const LINK_WIDGET = 'https://yandex.ru/map-widget/v1/-/';
// Ссылка организации для виджета
export const LINK_WIDGET_ORGNIZATION = 'CDVxjXP7';
// Ссылки под хедером
import { groupArrayByKey } from '@/js/utils/groupArrayByKey';
import modelsData from '@/data/models.json';
const groupModelsByBrand = groupArrayByKey(modelsData.filter(model => model.show), 'mark_id');
const children = Object.keys(groupModelsByBrand).reduce((acc, key) => {
	acc[key] = groupModelsByBrand[key].map(model => ( { url: `models/${model.id}/`, name: `${model.name.toUpperCase()}`, thumb: model.thumb } ) );
	return acc;
}, {});

export const LINKS_MENU = [
	{url: 'cars/', name: 'Авто в наличии'},
	// {url: 'catalog/', name: 'Каталог'},
	// {url: 'used_cars/', name: 'Авто с пробегом'},
	{ 
		url: 'models/', 
		name: 'Модели',
		children
	},
	// {url: 'trade-in/', name: 'Оценка автомобиля'},
	{
		url: 'for-owners/',
		name: 'Владельцам',
		children: [
			{ url: 'for-owners/warranty/', name: 'Гарантия Jetour' },
			{ url: 'for-owners/manual/', name: 'Руководства по эксплуатации' },
			{ url: 'for-owners/assistance/', name: 'Правила программы Джетур Ассистанс' },
			{ url: 'for-owners/club/', name: 'Клуб Jetour' },
			{ url: 'jetour-connect/', name: 'Jetour Connect' },
		],
	},
	{url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	{url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];
// Коллекции
export const COLLECTIONS = [
	{name: 'special-offers', title: 'Спецпредложения'},
	{name: 'news', title: 'Новости'},
	{name: 'for-owners', title: 'Владельцам'},
];
// Текстовая строка над хедером
export const HEADER_TOP_LINE = '';
// Текст согласия в формах
export const AGREE_LABEL = '<span>Даю согласие на обработку своих персональных данных на условиях, указанных</span> <a href="/privacy-policy" class="!m-0 underline transition-all hover:no-underline" target="_blank">здесь</a>';
// Текст информации в футере
import salonsData from '@/data/salons.json';
const salons = salonsData.filter(salon => !salon?.type || salon?.type.includes('footer_info'));
const phones = PHONE ? [`<a class="whitespace-nowrap" href="tel:${phoneFormat(PHONE)}">${PHONE}</a>`] : salons.map((salon) => { return `<span>${salon.name}</span> <a class="whitespace-nowrap" href="tel:${phoneFormat(salon.phone)}">${salon.phone}</a>` });

export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона '+phones.join(', ')+'. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
