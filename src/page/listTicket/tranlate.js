export const translate = (text) => {
  switch (text) {
    case 'pending':
      return 'در انتظار پاسخ'
    case 'answered':
      return 'پاسخ داده شد'
    case 'closed':
      return 'بسته شد'
    default:
      return
  }
}
