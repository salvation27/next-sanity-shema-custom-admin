  file sanity.json
  
  "parts": [
    {
      "name": "part:@sanity/base/schema",
      "path": "./schemas/schema"
    },
    <!-- для смені логотипа -->
    {
      "implements": "part:@sanity/base/brand-logo",
      "path": "my.js"
    }
  ]



  ==================================

  Для того что б втавить компонент в админку надо создать компонент обычно стили через module ,потом втавить его в схему 

  где остальнуе поля

<!-- startBlok это компонент который надо импортировать -->

  {
      name: "technikal",
      type: "string",
      inputComponent: startBlok,
    },