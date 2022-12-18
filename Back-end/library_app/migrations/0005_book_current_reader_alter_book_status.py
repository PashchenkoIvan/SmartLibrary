# Generated by Django 4.1.3 on 2022-12-12 16:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('library_app', '0004_alter_book_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='current_reader',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='users.visitor'),
        ),
        migrations.AlterField(
            model_name='book',
            name='status',
            field=models.CharField(choices=[('R', 'Reading'), ('W', 'Waiting'), ('A', 'Availible'), ('B', 'Booked')], default='W', max_length=1),
        ),
    ]