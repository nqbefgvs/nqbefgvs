export interface BookMenu {
  name: string,
  subMenu: Array<BookMenu>,
  files: Array<string>
}
