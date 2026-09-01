import gradio as gr
from modules import shared, ui_components


shared.options_templates.update(
    shared.options_section(
        ('neutrino', 'Neutrino'),
        {
            'neutrino_accent_color':
                shared.OptionInfo(
                    '#88cc11',
                    'Neutrino Accent Color - Light Mode', ui_components.FormColorPicker
                ).needs_reload_ui(),
            'neutrino_accent_color_dark':
                shared.OptionInfo(
                    '#88cc11',
                    'Neutrino Accent Color - Dark Mode', ui_components.FormColorPicker
                ).needs_reload_ui()
        }
    )
)

shared.gradio_theme.neutrino_accent_color = shared.opts.neutrino_accent_color
shared.gradio_theme.neutrino_accent_color_dark = shared.opts.neutrino_accent_color_dark
