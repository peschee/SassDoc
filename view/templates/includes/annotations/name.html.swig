<h2 class="sassdoc__item-name">
  {% if item.deprecated != false %}
    <span class="sassdoc__item-deprecated" title="{{ item.deprecated[0] }}">[Deprecated]</span>
  {% endif %}
  
  <code>{{ item.context.name }}</code>

  {% if display_alias and item.aliased.length > 0 %}
    <span class="sassdoc__item-alias">(aliased as
    {% for _alias in item.aliased %}
      <a href="#{{ item.context.type }}-{{ _alias }}"><code>{{ _alias }}</code></a>
    {% endfor %}
    )</span>
  {% endif %}

  {% if item.alias %}
    <span class="sassdoc__item-alias">(alias for <a href="#{{ item.context.type }}-{{ item.alias[0] }}"><code>{{ item.alias[0] }}</code></a>)</span>
  {% endif %}

  {% if item.since %}
    <span class="sassdoc__item-since">Since {{ item.since[0] }}</span>
  {% endif %}
</h2>