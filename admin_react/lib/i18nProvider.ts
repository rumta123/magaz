"use client";

import type { I18nProvider } from "react-admin";

const messages: Record<string, string> = {
  "ra.page.dashboard": "Панель управления",
  "ra.action.add_filter": "Добавить фильтр",
  "ra.action.cancel": "Отмена",
  "ra.action.clear_input_value": "Очистить",
  "ra.action.clone": "Клонировать",
  "ra.action.confirm": "Подтвердить",
  "ra.action.create": "Создать",
  "ra.action.delete": "Удалить",
  "ra.action.edit": "Редактировать",
  "ra.action.export": "Экспорт",
  "ra.action.list": "Список",
  "ra.action.refresh": "Обновить",
  "ra.action.remove_filter": "Убрать фильтр",
  "ra.action.save": "Сохранить",
  "ra.action.search": "Поиск",
  "ra.action.show": "Открыть",
  "ra.action.sort": "Сортировать",
  "ra.auth.auth_check_error": "Требуется вход",
  "ra.auth.logout": "Выйти",
  "ra.auth.password": "Пароль",
  "ra.auth.sign_in": "Войти",
  "ra.auth.user_menu": "Профиль",
  "ra.auth.username": "Эл. почта",
  "ra.message.yes": "Да",
  "ra.message.no": "Нет",
  "ra.navigation.no_results": "Ничего не найдено",
  "ra.navigation.page_rows_per_page": "Строк на странице:",
  "resources.products.name": "Товар |||| Товары",
  "resources.categories.name": "Категория |||| Категории",
  "resources.orders.name": "Заказ |||| Заказы",
  "resources.users.name": "Пользователь |||| Пользователи",
  "resources.users.page.list": "Пользователи",
  "resources.products.page.list": "Товары",
  "resources.categories.page.list": "Категории",
  "resources.orders.page.list": "Заказы",
  "ra.navigation.page_range_info": "%{offsetBegin}-%{offsetEnd} из %{total}",
  "resources.users.action.create": "Создать пользователя",
  "resources.products.action.create": "Создать товар",
  "resources.categories.action.create": "Создать категорию",
  "resources.orders.action.create": "Создать заказ",  
  "ra.action.bulk_actions": "1 выбран |||| %{smart_count} выбрано",
  "ra.message.bulk_delete_content": "Вы уверены, что хотите удалить %{name}?",
  "resources.products.notifications.updated": "Товар обновлен",
  "ra.action.undo": "Отменить",
  "resources.products.notifications.deleted": "Товар удален",
  "resources.products.notifications.created": "Товар создан",
  "resources.categories.notifications.updated": "Категория обновлена",
  "resources.categories.notifications.deleted": "Категория удалена",
  "resources.categories.notifications.created": "Категория создана",
  "resources.orders.notifications.updated": "Заказ обновлен",
  "resources.orders.notifications.deleted": "Заказ удален",
  "resources.orders.notifications.created": "Заказ создан", 
  "resources.users.notifications.updated": "Пользователь обновлен",
  "resources.users.notifications.deleted": "Пользователь удален",
  "resources.users.notifications.created": "Пользователь создан",
  "ra.validation.required": "Обязательное поле",
  "ra.validation.minLength": "Минимальная длина %{min}",
  "ra.validation.maxLength": "Максимальная длина %{max}",
  "ra.validation.minValue": "Минимальное значение %{min}",
  "ra.validation.maxValue": "Максимальное значение %{max}",
  "ra.validation.email": "Неверный формат электронной почты",
  "ra.input.image.upload_single": "Нажмите для загрузки изображения",
  "ra.input.image.upload_several": "Нажмите для загрузки изображений",
  "ra.input.image.remove": "Удалить",
  "ra.input.image.download": "Скачать",
  "ra.input.image.error": "Ошибка загрузки",
  "ra.input.image.invalid": "Неверный файл",
  "ra.input.image.max_size": "Макс. размер %{max} КБ",
  "ra.input.image.min_size": "Мин. размер %{min} КБ",
  "ra.input.image.accept": "Допустимые форматы: %{accept}",
  "ra.input.image.placeholder": "Перетащите изображение сюда или нажмите для выбора",
  "ra.input.image.hint": "Поддерживаемые форматы: %{accept}. Максимальный размер: %{max} КБ.",
  "ra.input.image.error_size": "Размер файла превышает %{max} КБ",
  "ra.input.image.error_format": "Недопустимый формат файла. Допустимые форматы: %{accept}",
  "ra.notification.item_doesnt_exist": "Элемент не существует",
  "resources.products.action.delete": "Удалить товар",
  "resources.categories.action.delete": "Удалить категорию",
  "resources.orders.action.delete": "Удалить заказ",
  "resources.users.action.delete": "Удалить пользователя",
  "ra.action.toggle_theme": "Переключить тему",
};

export const i18nProvider: I18nProvider = {
  translate: (key, options) => {
    // Отладка - удалите после проверки
    if (key.includes('bulk') || options?.smart_count !== undefined) {
      console.log(`🔑 Key: ${key}`, { 
        hasMessage: !!messages[key],
        smartCount: options?.smart_count,
        options 
      });
    }

    let message = messages[key] ?? key;
    const smartCount = options?.smart_count;

    // Обработка множественного числа
    if (typeof smartCount === "number" && message.includes("||||")) {
      const [single, plural] = message.split("||||").map((part) => part.trim());
      message = smartCount > 1 ? plural : single;
    }

    // Обработка переменных
    if (options) {
      message = message.replace(/%{(\w+)}/g, (_, varName) => {
        if (varName === 'smart_count' && smartCount !== undefined) {
          return String(smartCount);
        }
        return options[varName] !== undefined ? String(options[varName]) : `%{${varName}}`;
      });
    }

    return message;
  },
  changeLocale: async () => Promise.resolve(),
  getLocale: () => "ru",
};