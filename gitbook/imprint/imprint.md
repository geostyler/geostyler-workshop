# Imprint

This workshop is licensed under the [CC BY-SA](http://creativecommons.org/licenses/by-sa/2.0/) license. In case of questions, feel free to contact us via GitHub [@terrestris](https://github.com/terrestris), e-mail [info@terrestris.de](mailto:info@terrestris.de) or telephone 0228 – 962 899 51.

## Authors

{% for author in book.authors %}
  - {{ author.name }} ([{{ author.mail }}](mailto:{{ author.mail }}))
{% endfor %}