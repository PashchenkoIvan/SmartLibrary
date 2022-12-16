from django.db import models
from users.models import User

class Book(models.Model):
        
    title = models.CharField(max_length=100, verbose_name='Назва')
    inventory_num = models.IntegerField(verbose_name='Інвентарний номер')
    author = models.CharField(max_length=200, verbose_name='Автор(и) книги')
    number_of_pages = models.IntegerField(verbose_name='Кількість сторінок')
    publusher = models.CharField(max_length=100, verbose_name='Видавництво')
    isbn = models.CharField(max_length=20, verbose_name='ISBN')  # A unique number of the book edition, necessary for the distribution of the book in retail chains
    book_type = models.CharField(max_length=1, verbose_name='Тип книги', choices=(
        ("D", "Електронна"),
        ("P", "Паперова"),
    ))
    language = models.CharField(max_length=100, verbose_name='Мова')
    cover_img_path = models.CharField(max_length=100, verbose_name='Обкладинка', default='')
    cover_type = models.CharField(max_length=1, verbose_name='Тип Обкладинки', choices=(
        ("S", "М'ягка"),
        ("H", "Твёрда"),
    ))
    category = models.ManyToManyField("Category", related_name=("books"), verbose_name='Категорія')
    description = models.TextField(verbose_name='Опис книги', blank=True)
    time_to_read = models.IntegerField(verbose_name='Кількість днів на прочитання')
    pubication_date = models.DateField(verbose_name='Точна дата видавництва', blank=True, null=True)
    pubication_year = models.IntegerField(verbose_name='Рік видавництва')
    city_of_publishing = models.CharField(max_length=70, verbose_name='Місто видавництва', blank=True)
    ubk = models.IntegerField(verbose_name='УБК шифр', blank=True, null=True)
    additional_type = models.CharField(max_length=1, default="B", verbose_name='Тип', choices=(
        ("B", "Книга"),
        ("J", "Журнал"),
        ("N", "Газета")
    ))
    publication_type = models.CharField(max_length=10, verbose_name='Тип виданя', choices=(
        ("Period", "Періодичні видання"),
        ("Books", "Книги"),
        ("Dgtl", "Цифрові видання"), 
        ("Map", "Карта"),
    ))
    status = models.CharField(max_length=1, default="W", choices=(
        ('R','Reading'), 
        ('W','Waiting'),
        ('A','Availible'),
        ('B', 'Booked')
    ))
    current_reader = models.OneToOneField(User, on_delete=models.SET_NULL, null=True, blank=True)
    # Additional
    
    document_type = models.CharField(max_length=100, null=True, blank=True, 
                                     verbose_name='Тип документа')
    bibliografic_document_level = models.IntegerField(null=True, blank=True, 
                                                      verbose_name='Бібліографічний рівень документа') # ?
    document_entry_date = models.DateField(auto_now=False, auto_now_add=False, null=True, blank=True, 
                                           verbose_name='Дата введення документа')
    pubication_date_type = models.CharField(max_length=100, blank=True, null=True, verbose_name='Тип дати публікації')
    illustration_type_availability_codes = models.CharField(max_length=250, blank=True, null=True, 
                                                            verbose_name='Коди наявності типів ілюстрацій')
    age_orientation_code = models.IntegerField(blank=True, null=True, verbose_name='Код вікової орієнтації')
    material_type_code = models.IntegerField(blank=True, null=True, verbose_name='Код типу матеріалу')
    document_type_codes = models.IntegerField(blank=True, null=True, verbose_name='Коди типу документа')
    government_publication_status = models.CharField(max_length=100, blank=True, null=True, 
                                                     verbose_name='Статус урядової публікації') # ?
    is_conference_publishing = models.BooleanField(default=False , verbose_name='Ознака публікації конференції')
    is_jubilee = models.BooleanField(default=False, verbose_name='Юбилейне видання')
    is_pointers = models.BooleanField(default=False, verbose_name='Наявність покажчиків')
    is_main_entry = models.BooleanField(default=False, verbose_name='Main entry?')
    is_arts_literature = models.BooleanField(default=False, verbose_name='Ознака мистецтв. літератури')
    biografy_type_code = models.IntegerField(blank=True, null=True, verbose_name='Код типу біографії')
    document_lang_code = models.IntegerField(blank=True, null=True, verbose_name='Код мови документа')
    organization_that_created_rec_code = models.IntegerField(blank=True, null=True, 
                                                             verbose_name="Код організації, яка створила запис")
    price = models.FloatField(blank=True, null=True, verbose_name="Ціна")
    invalid_isbn = models.IntegerField(blank=True, null=True, verbose_name="Помилковий ISBN")
    library_code = models.IntegerField(blank=True, null=True, verbose_name="Код бібліотеки, створеного запису")
    catalization_lang_code = models.IntegerField(blank=True, null=True, verbose_name="Код мови каталогізації")
    responsible = models.CharField(max_length=100, blank=True, null=True, verbose_name="Код мови каталогізації") 
                # ^ models.ForeignKey("Librarian", on_delete=models.SET_NULL, blank=True, null=True, verbose_name="Код мови каталогізації")
    translation = models.TextField(blank=True, null=True, verbose_name="Переклад")
    text_lang_code = models.IntegerField(blank=True, null=True, verbose_name="Код мови тексту")
    preface_lang_code = models.IntegerField(blank=True, null=True, verbose_name="Код мови передмови")
    context_lang_code = models.IntegerField(blank=True, null=True, verbose_name="Код мови змісту")
    original_lang_code = models.IntegerField(blank=True, null=True, verbose_name="Код мови оригіналу")                     
    country_code = models.IntegerField(blank=True, null=True, verbose_name="Код країни")                
    udk_index = models.IntegerField(blank=True, null=True, verbose_name="Iндекс УДК")    
    udk = models.IntegerField(blank=True, null=True, verbose_name="УДК")
    classification_source = models.CharField(max_length=150, blank=True, null=True, verbose_name="Джерело класифікації")
    shelf_cipher = models.IntegerField(blank=True, null=True, verbose_name="Поличний шифр")
    national_library_code = models.IntegerField(blank=True, null=True, verbose_name="Національний код бібліотеки")
    category_indexes = models.CharField(max_length=70, blank=True, null=True, verbose_name="Кат. індекси")
    storage_symbol = models.CharField(max_length=70, blank=True, null=True, verbose_name="Сигла зберігання")
    book_format = models.CharField(max_length=50, blank=True, null=True, verbose_name="Фоpмат")
    fond_number = models.CharField(max_length=150, blank=True, null=True, verbose_name="Номер фонду")
    copyright_sign = models.CharField(max_length=150, blank=True, null=True, verbose_name="Авторський знак")
    indexes = models.CharField(max_length=25, blank=True, null=True, verbose_name="Індекси / коди")
    indexes_bbk = models.IntegerField(blank=True, null=True, verbose_name="Індекс ББК")
    dynastic_number = models.IntegerField(blank=True, null=True, verbose_name="Династичний номер")
    rank = models.CharField(max_length=50, blank=True, null=True, verbose_name="Титул (звання)")
    organisation = models.CharField(max_length=200, blank=True, null=True, verbose_name="Соподчиненная одиниця")
    subordinate_unit = models.CharField(max_length=200, blank=True, null=True, verbose_name="Організація / юрисдикція")  # ?
    section_number = models.IntegerField(blank=True, null=True, verbose_name="Номер частині / секції")
    unified_title = models.CharField(max_length=100, blank=True, null=True, verbose_name="Уніфіковане заголовок")
    indicator = models.CharField(max_length=100, blank=True, null=True, verbose_name="Iндикатор")
    minor_characters = models.CharField(max_length=10, blank=True, null=True, verbose_name="Незначущі символи")
    part_section_number = models.IntegerField(blank=True, null=True, verbose_name="Номер частині / розділу")
    part_section_title = models.CharField(max_length=70, blank=True, null=True, verbose_name="Назва частині / розділу")
    title_translation = models.CharField(max_length=100, blank=True, null=True, verbose_name='Переклад назви')
    title_continuation = models.CharField(max_length=100, blank=True, null=True, verbose_name='Продовження назви')
    responsibility = models.CharField(max_length=50, blank=True, null=True, verbose_name='Відповідальність')
    # Дати твори
    recording_type = models.CharField(max_length=50, blank=True, null=True, verbose_name='Тип запису / Звукозапис')
    parllel_title = models.CharField(max_length=100, blank=True, null=True, verbose_name='Паралельна назва')
    header_types = models.CharField(max_length=50, blank=True, null=True, verbose_name='Тип заголовки')
    main_header = models.CharField(max_length=50, blank=True, null=True, verbose_name='Основний заголовок')
    main_publication_info = models.TextField(max_length=50, blank=True, null=True, verbose_name='Основні відомості про видання')
    additional_publication_info = models.TextField(max_length=50, blank=True, null=True, verbose_name='Додаткові відомості про видання')
    publication_city = models.CharField(max_length=50, blank=True, null=True, verbose_name='Місце видання')
    publish_date = models.DateField(blank=True, null=True, auto_now=False, auto_now_add=False, verbose_name='Дата видання')
    amount = models.IntegerField(blank=True, null=True, verbose_name='Обсяг')
    playback_type = models.CharField(max_length=50, blank=True, null=True, verbose_name='Іл. / Тип воспроизв')
    another_format = models.CharField(max_length=50, blank=True, null=True, verbose_name="Фоpмат")
    additional_materials = models.CharField(max_length=100, blank=True, null=True, verbose_name="Сопроводні матеріали")
    serial = models.IntegerField(blank=True, null=True, verbose_name='Серія')
    part_section_number = models.IntegerField(blank=True, null=True, verbose_name="Номер частині")
    part_section_title = models.CharField(max_length=70, blank=True, null=True, verbose_name="Назва частині")
    number_volumes = models.IntegerField(blank=True, null=True, verbose_name="Номер томи, номера")
    issn = models.IntegerField(blank=True, null=True, verbose_name="ISSN")
    # Тип прямуючи
    content_format = models.CharField(max_length=40, blank=True, null=True, verbose_name="Формат змісту")
    reference_notes = models.TextField(blank=True, null=True, verbose_name="Примітки про посилання")
    annotation = models.CharField(max_length=100, blank=True, null=True, verbose_name="Анотація")
    destination_note = models.CharField(max_length=100, blank=True, null=True, verbose_name="Примітка про цільове призначення")
    level = models.IntegerField(blank=True, null=True, verbose_name='Рівень')
    rubricator = models.CharField(max_length=20, blank=True, null=True, verbose_name="Рубрикатор")
    main_heading = models.CharField(max_length=50, blank=True, null=True, verbose_name="Основна рубріка")
    main_subheading = models.CharField(max_length=50, blank=True, null=True, verbose_name="Основна подрубріка")
    place_of_printing = models.CharField(max_length=120, blank=True, null=True, verbose_name="Місце друкування")
    bibliografic = models.CharField(max_length=120, blank=True, null=True, verbose_name="Бібліографія")
    hronological_subheading = models.CharField(max_length=50, blank=True, null=True, verbose_name="Хронологічна подрубріка")
    geografical_subheading = models.CharField(max_length=50, blank=True, null=True, verbose_name="Географічна подрубріка")
    keywoards = models.TextField(blank=True, null=True, verbose_name="Ключові слова")
    other_authors = models.CharField(max_length=50, blank=True, null=True, verbose_name="Iнші автори")
    dynastic_number = models.IntegerField(blank=True, null=True, verbose_name="Династичний номер")
    author_attitude_code = models.IntegerField(blank=True, null=True, verbose_name="Код авторського ставлення")
    other_organisations = models.CharField(max_length=120, blank=True, null=True, verbose_name="Iнші організації")
    other_measures = models.CharField(max_length=120, blank=True, null=True, verbose_name="Iнші заходи")
    location = models.CharField(max_length=120, blank=True, null=True, verbose_name="Місцезнаходження")
    fund = models.CharField(max_length=70, blank=True, null=True, verbose_name="Фонд")
    
    access_method = models.CharField(max_length=20, blank=True, null=True, verbose_name="Спосіб (тип) доступу")
    host_name = models.CharField(max_length=20, blank=True, null=True, verbose_name="Ім'я сервера (HostName)")
    server_location = models.CharField(max_length=70, blank=True, null=True, verbose_name="Місцезнаходження сервера")
    personnel = models.CharField(max_length=70, blank=True, null=True, verbose_name="Персоналія")
    country_codes = models.CharField(max_length=50, blank=True, null=True, verbose_name="Коди країни")
    sponsors = models.BooleanField(default=False, verbose_name='Спонсори')
    book_category = models.CharField(max_length=3, blank=True, null=True, verbose_name="Коди країни",
                                     choices=(
                                         ("SPL", "СПЛ"),
                                         ("PNL", "ПНЛ"),
                                         ("TEH", "ТЕХ"),
                                         ("GYM", "ГУМ"),            
                                     ))
                           
    def __str__(self) -> str:
        return self.title
    
    
class Category(models.Model):
    title = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=7)
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name_plural = 'Categories'


