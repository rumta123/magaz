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
};

export const i18nProvider: I18nProvider = {
  translate: (key, options) => {
    const message = messages[key] ?? key;
    const smartCount = options?.smart_count;

    if (typeof smartCount === "number" && message.includes("||||")) {
      const [single, plural] = message.split("||||").map((part) => part.trim());
      return smartCount > 1 ? plural : single;
    }

    return message;
  },
  changeLocale: async () => Promise.resolve(),
  getLocale: () => "ru",
};
