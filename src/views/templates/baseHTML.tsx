export const BaseHTML = ({ children }: Html.PropsWithChildren) => {
  return (
    <html>
      <head>
        <title>Bexlite todos</title>
        <link href="/public/global.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
};
