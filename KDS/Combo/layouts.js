/* Реестр панели ревью (ds-review.js) — папка _prototype.
   Прототип «КДС · Комбо-набор» (Jira PB-8108 «Отображение принадлежности блюда к
   комбо-набору на кухонном экране», сценарии — приложение PB-8101-combo-user-scenarios-2026-10-19.md,
   выдержка из PB-7812).
   Один файл kds-combo.html: экраны переключаются селектом «Экраны» через state
   (в контенте ссылок-переключателей нет — правило 19.10.2026). Демо-контента нет — только свои экраны. */
window.dsLayouts = {
  проект: 'КДС · Комбо-набор',
  адаптив: true,
  шаги: [
    { file: 'kds-combo.html', state: 'base', title: 'База · экран как в Figma' },
    { file: 'kds-combo.html', state: 'g-multi', title: 'Сценарий 2 · блюда набора одним блоком · горячий цех' },
    { file: 'kds-combo.html', state: 'g-single', title: 'Сценарий 2 · блюда набора одним блоком · холодный цех' },
    { file: 'kds-combo.html', state: 'g-kitchens', title: 'Сценарий 2 · блюда набора одним блоком · оба цеха' },
    { file: 'kds-combo.html', state: 'g-assembly', title: 'Сценарий 2 · экран сборщика' },
    { file: 'kds-combo.html', state: 'g-group-rail', title: 'Сценарий 2 · группа с левым рейлом (вариант B)' },
    { file: 'kds-combo.html', state: 'g-courses', title: 'Сценарий 3.3 · набор разложен по курсам' },
    { file: 'kds-combo.html', state: 'g-between', title: 'Сценарий 3.2 · блюда набора собраны в блок' },
    { file: 'kds-combo.html', state: 'g-between-order', title: 'Сценарий 3.2 · исходный порядок из заказа' },
    { file: 'kds-combo.html', state: 'g-instances', title: 'Сценарий 3.1 · два набора, разный состав' },
    { file: 'kds-combo.html', state: 'g-instances-same', title: 'Сценарий 3.1 · два набора, одинаковый состав' },
    { file: 'kds-combo.html', state: 'g-modifier', title: 'Сценарий 3.6 · модификатор готовится отдельно' },
    { file: 'kds-combo.html', state: 'g-cancelled', title: 'Отменённое блюдо из набора' },
    { file: 'kds-combo.html', state: 'g-long', title: 'Сценарий 3.7 · длинное название, узкий экран' },
    { file: 'kds-combo.html', state: 'd-list', title: 'Сценарий 2.2 · по блюдам · набор подписан текстом' },
    { file: 'kds-combo.html', state: 'g-filter', title: 'Сценарий 2 · включён фильтр «Готово»' },
    { file: 'kds-combo.html', state: 'g-nocook', title: 'Сценарий 2 · позиция без приготовления' },
    { file: 'kds-combo.html', state: 'g-two-combos', title: 'Сценарий 3.1 · два набора с одним блюдом' },
    { file: 'kds-combo.html', state: 'g-cancel-last', title: 'Сценарий 3.1 · отменён последний компонент' },
    { file: 'kds-combo.html', state: 'icons', title: 'Пиктограммы · звезда набора и post_add' },
    { file: 'kds-combo.html', state: 'rationale', title: 'Обоснование решения' },
  ]
};
