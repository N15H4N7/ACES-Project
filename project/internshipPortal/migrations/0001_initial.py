# Generated by Django 3.0.6 on 2020-08-02 05:55

from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Internship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('field_of_internship', models.CharField(default='', max_length=100)),
                ('duration', models.CharField(max_length=20)),
                ('about', models.TextField()),
                ('location', models.CharField(max_length=100)),
                ('stipend', models.CharField(max_length=100)),
                ('skills_required', models.CharField(max_length=500)),
                ('no_of_internships', models.PositiveIntegerField()),
                ('perks', models.CharField(max_length=100)),
                ('apply_by', models.DateField(default='2000-01-01', help_text='YYYY-MM-DD Format should be followed for the date.')),
                ('who_should_apply', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='InternshipApplication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField(blank=True, default='', max_length=1200)),
                ('resume', models.URLField(default='', help_text='Add the drive link to your resume.')),
            ],
        ),
        migrations.CreateModel(
            name='VentureCapitalist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('about', models.CharField(max_length=550)),
                ('startups_funded', models.CharField(default='', max_length=500)),
                ('contact', phonenumber_field.modelfields.PhoneNumberField(blank=True, help_text='Add country code before the contact no.', max_length=128, null=True, region=None)),
                ('email', models.EmailField(default='', max_length=254)),
                ('photo', models.ImageField(default='', upload_to='vc/')),
                ('industries', models.CharField(default='', max_length=500)),
            ],
        ),
    ]
