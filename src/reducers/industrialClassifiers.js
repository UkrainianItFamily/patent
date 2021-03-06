import { createActions, handleActions } from 'redux-actions';
import * as actionTypes from 'actionTypes';

const defaultState = {
	mkpoSearchForm: {
		industrial_class: '',
		industrial_name: ''
	},
  mkpoSearch: {
    list: [
      {
        title: 'Класс 5. Текстильные штучные или кусковые изделия, искусственные и натуральные листовые материалы материалы',
        items: [
          {
            number: '05-01',
            text: 'Изделия прядильного производства'
          },
          {
            number: '05-02',
            text: 'Кружева'
          },
          {
            number: '05-03',
            text: 'Вышивки'
          },
          {
            number: '05-04',
            text: 'Ленты различного назначения, тесьма, канты, нашивки и подобные изделия для декоративной отделки'
          },
          {
            number: '05-05',
            text: 'Текстильные изделия'
          },
          {
            number: '05-06',
            text: 'Искусственные или натуральные листовые материалы'
          },
          {
            number: '05-99',
            text: 'Разное'
          }
        ]
      },
      {
        title: 'Класс 15. Машины и станки, не включенные в другие классы',
        items: [
          {
            number: '05-01',
            text: 'Изделия прядильного производства'
          },
          {
            number: '05-02',
            text: 'Кружева'
          },
          {
            number: '05-03',
            text: 'Вышивки'
          },
          {
            number: '05-04',
            text: 'Ленты различного назначения, тесьма, канты, нашивки и подобные изделия для декоративной отделки'
          },
          {
            number: '05-05',
            text: 'Текстильные изделия'
          },
          {
            number: '05-06',
            text: 'Искусственные или натуральные листовые материалы'
          },
          {
            number: '05-99',
            text: 'Разное'
          }
        ]
      },
    ],
    current_page: '3',
    page_count: '10'
  },
  mkpoAlphabeticalList: {
    list: [
      {
        number: '02-01',
        text: 'Бабы для уплотнения грунта (ручные инструменты)'
      },
      {
        number: '02-02',
        text: 'Бабы для уплотнения грунта (ручные инструменты)'
      },
      {
        number: '02-03',
        text: 'Бабы для уплотнения грунта (ручные инструменты)'
      },
      {
        number: '08-01',
        text: 'Бабы (ручные инструменты)'
      },
      {
        number: '08-02',
        text: 'Бабы (ручные инструменты)'
      },
      {
        number: '08-03',
        text: 'Бабы (ручные инструменты)'
      },
      {
        number: '12-11',
        text: 'Багажники для велосипедов или мотоциклов'
      },
      {
        number: '12-12',
        text: 'Багажники для велосипедов или мотоциклов'
      },
      {
        number: '12-13',
        text: 'Багажники для велосипедов или мотоциклов'
      },
      {
        number: '12-16',
        text: 'Багажники для транспортных средств (за исключением велосипедов и мотоциклов)'
      },
      {
        number: '12-17',
        text: 'Багажники для транспортных средств (за исключением велосипедов и мотоциклов)'
      },
      {
        number: '12-18',
        text: 'Багажники для транспортных средств (за исключением велосипедов и мотоциклов)'
      },
      {
        number: '12-19',
        text: 'Багажники, устанавливаемые на крыше автомобиля'
      },
      {
        number: '12-20',
        text: 'Багажники, устанавливаемые на крыше автомобиля'
      },
      {
        number: '12-21',
        text: 'Багажники, устанавливаемые на крыше автомобиля'
      },
      {
        number: '06-07',
        text: 'Багеты для картинных рам [13]'
      },
      {
        number: '06-08',
        text: 'Багеты для картинных рам [13]'
      },
      {
        number: '06-09',
        text: 'Багеты для картинных рам [13]'
      },
      {
        number: '06-10',
        text: 'Багеты рам для картин или зеркал'
      },
      {
        number: '06-11',
        text: 'Багеты рам для картин или зеркал'
      },
      {
        number: '06-12',
        text: 'Багеты рам для картин или зеркал'
      },
      {
        number: '13-11',
        text: 'Баки топливные для мотоциклов'
      },
      {
        number: '13-12',
        text: 'Баки топливные для мотоциклов'
      },
      {
        number: '13-13',
        text: 'Баки топливные для мотоциклов'
      },
      {
        number: '21-04',
        text: 'Балаганы ярмарочные'
      },
      {
        number: '21-05',
        text: 'Балаганы ярмарочные'
      },
      {
        number: '21-06',
        text: 'Балаганы ярмарочные'
      },
      {
        number: '17-03',
        text: 'Балалайки [7]'
      },
      {
        number: '17-04',
        text: 'Балалайки [7]'
      },
      {
        number: '17-05',
        text: 'Балалайки [7]'
      },
      {
        number: '25-97',
        text: 'Балдахины для тронов или алтарей [12]'
      },
      {
        number: '25-98',
        text: 'Балдахины для тронов или алтарей [12]'
      },
      {
        number: '25-99',
        text: 'Балдахины для тронов или алтарей [12]'
      },
      {
        number: '02-04',
        text: 'Балетные туфли'
      },
      {
        number: '02-05',
        text: 'Балетные туфли'
      },
      {
        number: '02-06',
        text: 'Балетные туфли'
      },
      {
        number: '02-07',
        text: 'Балетные юбки'
      },
      {
        number: '02-08',
        text: 'Балетные юбки'
      },
      {
        number: '02-09',
        text: 'Балетные юбки'
      },
      {
        number: '25-01',
        text: 'Балки продольные, балочные фермы'
      },
      {
        number: '25-02',
        text: 'Балки продольные, балочные фермы'
      },
      {
        number: '25-03',
        text: 'Балки продольные, балочные фермы'
      },
      {
        number: '25-04',
        text: 'Балки, балочные прогоны'
      },
      {
        number: '25-05',
        text: 'Балки, балочные прогоны'
      },
      {
        number: '25-06',
        text: 'Балки, балочные прогоны'
      }
    ],
    current_page: '3',
    page_count: '10'
  },
  mkpoClassList: {
    list: [
      {
        title: 'Класс 1. Пищевые продукты',
        description: 'Не содержит предметы одежды для кукол (подкл. 21-01), специальное снаряжение противопожарное, спасательное, для предотвращения несчастных случаев (кл. 29) и одежду для животных (подкл. 30-01)',
        items: [
          {
            number: '01-01',
            text: 'Изделия прядильного производства'
          },
          {
            number: '01-02',
            text: 'Кружева'
          },
          {
            number: '01-03',
            text: 'Вышивки'
          },
          {
            number: '01-04',
            text: 'Ленты различного назначения, тесьма, канты, нашивки и подобные изделия для декоративной отделки'
          },
          {
            number: '01-05',
            text: 'Текстильные изделия'
          },
          {
            number: '01-06',
            text: 'Искусственные или натуральные листовые материалы'
          },
          {
            number: '01-99',
            text: 'Разное'
          }
        ]
      },
      {
        title: 'Класс 2. Предметы одежды, галантерея',
        description: 'Не содержит предметы одежды для кукол (подкл. 21-01), специальное снаряжение противопожарное, спасательное, для предотвращения несчастных случаев (кл. 29) и одежду для животных (подкл. 30-01)',
        items: [
          {
            number: '02-01',
            text: 'Изделия прядильного производства'
          },
          {
            number: '02-02',
            text: 'Кружева'
          },
          {
            number: '02-03',
            text: 'Вышивки'
          },
          {
            number: '02-04',
            text: 'Ленты различного назначения, тесьма, канты, нашивки и подобные изделия для декоративной отделки'
          },
          {
            number: '02-05',
            text: 'Текстильные изделия'
          },
          {
            number: '02-06',
            text: 'Искусственные или натуральные листовые материалы'
          },
          {
            number: '02-99',
            text: 'Разное'
          }
        ]
      },
      {
        title: 'Класс 3. Дорожные принадлежности, футляры, зонты и предметы личного пользования, не включенные в другие классы',
        description: 'Не содержит предметы одежды для кукол (подкл. 21-01), специальное снаряжение противопожарное, спасательное, для предотвращения несчастных случаев (кл. 29) и одежду для животных (подкл. 30-01)',
        items: [
          {
            number: '03-01',
            text: 'Изделия прядильного производства'
          },
          {
            number: '03-02',
            text: 'Кружева'
          },
          {
            number: '03-03',
            text: 'Вышивки'
          },
          {
            number: '03-04',
            text: 'Ленты различного назначения, тесьма, канты, нашивки и подобные изделия для декоративной отделки'
          },
          {
            number: '03-05',
            text: 'Текстильные изделия'
          },
          {
            number: '03-06',
            text: 'Искусственные или натуральные листовые материалы'
          },
          {
            number: '03-99',
            text: 'Разное'
          }
        ]
      },
      {
        title: 'Класс 4. Щёточные изделия',
        description: 'Не содержит предметы одежды для кукол (подкл. 21-01), специальное снаряжение противопожарное, спасательное, для предотвращения несчастных случаев (кл. 29) и одежду для животных (подкл. 30-01)',
        items: [
          {
            number: '04-01',
            text: 'Изделия прядильного производства'
          },
          {
            number: '04-02',
            text: 'Кружева'
          },
          {
            number: '04-03',
            text: 'Вышивки'
          },
          {
            number: '04-04',
            text: 'Ленты различного назначения, тесьма, канты, нашивки и подобные изделия для декоративной отделки'
          },
          {
            number: '04-05',
            text: 'Текстильные изделия'
          },
          {
            number: '04-06',
            text: 'Искусственные или натуральные листовые материалы'
          },
          {
            number: '04-99',
            text: 'Разное'
          }
        ]
      },
      {
        title: 'Класс 5. Текстильные штучные или кусковые изделия, искусственные и натуральные листовые материалы',
        description: 'Не содержит предметы одежды для кукол (подкл. 21-01), специальное снаряжение противопожарное, спасательное, для предотвращения несчастных случаев (кл. 29) и одежду для животных (подкл. 30-01)',
        items: [
          {
            number: '05-01',
            text: 'Изделия прядильного производства'
          },
          {
            number: '05-02',
            text: 'Кружева'
          },
          {
            number: '05-03',
            text: 'Вышивки'
          },
          {
            number: '05-04',
            text: 'Ленты различного назначения, тесьма, канты, нашивки и подобные изделия для декоративной отделки'
          },
          {
            number: '05-05',
            text: 'Текстильные изделия'
          },
          {
            number: '05-06',
            text: 'Искусственные или натуральные листовые материалы'
          },
          {
            number: '05-99',
            text: 'Разное'
          }
        ]
      }
    ],
    current_page: '3',
    page_count: '10'
  },
  mkpoClassDetailed: {
    title: 'Бельё, женское бельё, в том числе корсеты, бюстгалтеры, ночное бельё, пижамы',
    notes: [
      'Содержит ортопедические корсеты и нательное бельё',
      'Не содержит постельное, столовое и т.п. бельё, используемое в домашнем хозяйстве (подкл. 6-13)'
    ],
    tags: [
      'Бюстгалтеры',
      'Клейкие изделия для поддержки груди',
      'Комбинации',
      'Корсеты',
      'Корсеты ортопедические',
      'Крепления позгузников для младенцев',
      'Мужское нижнее бельё',
      'Набедренники защитные для спортсменов',
      'Набрюшники',
      'Нижнее бельё для беременных',
      'Нижнее бельё для кормящих матерей',
      'Ночные сорочки',
      'Памперсы для младенцев',
      'Памперсы-штанишки',
      'Панталоны',
      'Панталоны женские и детские',
      'Пижамы',
      'Подгузники-штанишки',
      'Подштанники короткие',
      'Покрытия памперсов для младенцев',
      'Покрытия подгузников для младенцев',
      'Пояса корсетные, эластичные'
    ]
  },
  mkpoVersions: {
    files: [
      {
        link: '',
        text: 'Международная классификация промышленных образцов МКПО (12 редакция) на русском языке',
        weight: '118'
      },
      {
        link: '',
        text: 'Международная классификация промышленных образцов МКПО (11 редакция) на русском языке',
        weight: '118'
      },
      {
        link: '',
        text: 'Международная классификация промышленных образцов МКПО (10 редакция) на русском языке',
        weight: '118'
      },
    ],
    all_files: ''
  }
};

export const actions = createActions ({
	[ actionTypes.MKPO_CHANGE_SEARCH_FORM ]: ( value ) => ({ value }),
	[ actionTypes.MKPO_CLEAR_SEARCH_FORM ]: () => null
});

export default handleActions (
	{
		[ actionTypes.MKPO_CHANGE_SEARCH_FORM ]: ( state, { payload } ) => ({
			...state,
      mkpoSearchForm: {
        ...state.mkpoSearchForm,
        ...payload.value
      }
    }),
		[ actionTypes.MKPO_CLEAR_SEARCH_FORM ]: ( state ) => ({
			...state,
      mkpoSearchForm: {
				industrial_class: '',
				industrial_name: ''
			},
      mkpoSearch: {
        list: undefined,
        current_page: undefined,
        page_count: undefined
      }
    })
	},
	defaultState
);
