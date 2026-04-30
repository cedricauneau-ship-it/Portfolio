// Déclarations globales pour les imports CSS / CSS Modules

declare module "*.css";

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
