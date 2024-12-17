<?php

namespace foxizElementor\Widgets;
defined( 'ABSPATH' ) || exit;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Widget_Base;
use foxizElementorControl\Options;
use function foxiz_get_newsletter;

/**
 * Class
 *
 * @package foxizElementor\Widgets
 */
class Newsletter_1 extends Widget_Base {

	public function get_name() {

		return 'foxiz-newsletter-1';
	}

	public function get_title() {

		return esc_html__( 'Foxiz - FW Newsletter 1', 'foxiz-core' );
	}

	public function get_icon() {

		return 'eicon-mail';
	}

	public function get_keywords() {

		return [ 'foxiz', 'ruby', 'mailchimp', 'subscribe', 'form', 'email' ];
	}

	public function get_categories() {

		return [ 'foxiz_element' ];
	}

	protected function register_controls() {

		$this->start_controls_section(
			'general', [
				'label' => esc_html__( 'Content', 'foxiz-core' ),
				'tab'   => Controls_Manager::TAB_CONTENT,
			]
		);
		$this->add_control(
			'mc_form_info',
			[
				'type'            => Controls_Manager::RAW_HTML,
				'raw'             => esc_html__( 'Ensure the MC4WP Form Structure is correct with the format of the theme. Please read the documentation below for further information.', 'foxiz-core' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-warning',
			]
		);
		$this->add_control(
			'mc_form_doc_info',
			[
				'type'            => Controls_Manager::RAW_HTML,
				'raw'             => '<a href="https://help.themeruby.com/foxiz/mc4wp-form-structure/" target="_blank">' . esc_html__( 'MC4WP form structure documentation', 'foxiz-core' ) . '</a>',
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			]
		);
		$this->add_control(
			'title',
			[
				'label'       => esc_html__( 'Heading', 'foxiz-core' ),
				'description' => esc_html__( 'Input a heading for the newsletter box.', 'foxiz-core' ),
				'type'        => Controls_Manager::TEXTAREA,
				'ai'          => [ 'active' => false ],
				'rows'        => 1,
				'default'     => esc_html__( 'Always Stay Up to Date', 'foxiz-core' ),
			]
		);
		$this->add_control(
			'description',
			[
				'label'       => esc_html__( 'Description', 'foxiz-core' ),
				'type'        => Controls_Manager::TEXTAREA,
				'ai'          => [ 'active' => false ],
				'rows'        => 2,
				'description' => esc_html__( 'Input a description for the newsletter box.', 'foxiz-core' ),
				'default'     => esc_html__( 'Subscribe to our newsletter to get our newest articles instantly!', 'foxiz-core' ),
			]
		);
		$this->add_control(
			'shortcode',
			[
				'label'       => esc_html__( 'Form Shortcode', 'foxiz-core' ),
				'type'        => Controls_Manager::TEXT,
				'ai'          => [ 'active' => false ],
				'description' => esc_html__( 'Input your newsletter form shortcode.', 'foxiz-core' ),
				'placeholder' => esc_html__( '[mc4wp_form]', 'foxiz-core' ),
				'default'     => '[mc4wp_form]',
			]
		);
		$this->add_control(
			'featured',
			[
				'label'       => esc_html__( 'Featured Image', 'foxiz-core' ),
				'description' => esc_html__( 'Input a featured image attachment URL for the newsletter box.', 'foxiz-core' ),
				'type'        => Controls_Manager::MEDIA,
				'ai'          => [ 'active' => false ],
			]
		);
		$this->add_control(
			'dark_featured',
			[
				'label'       => esc_html__( 'Dark Mode - Featured Image', 'foxiz-core' ),
				'description' => esc_html__( 'Input a featured attachment URL for the newsletter box in dark mode.', 'foxiz-core' ),
				'type'        => Controls_Manager::MEDIA,
				'ai'          => [ 'active' => false ],
			]
		);
		$this->end_controls_section();
		$this->start_controls_section(
			'heading_section', [
				'label' => esc_html__( 'Heading', 'foxiz-core' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_control(
			'title_tag',
			[
				'label'   => esc_html__( 'Heading HTML Tag', 'foxiz-core' ),
				'type'    => Controls_Manager::SELECT,
				'options' => Options::heading_html_dropdown(),
				'default' => '0',
			]
		);
		$this->add_responsive_control(
			'title_tag_size', [
				'label'       => esc_html__( 'Heading Font Size', 'foxiz-core' ),
				'type'        => Controls_Manager::NUMBER,
				'description' => esc_html__( 'Input custom font size values (in pixels) for this newsletter heading.', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}} .newsletter-title' => 'font-size: {{VALUE}}px;' ],
			]
		);
		$this->add_responsive_control(
			'heading_spacing', [
				'label'     => esc_html__( 'Bottom Spacing', 'foxiz-core' ),
				'type'      => Controls_Manager::NUMBER,
				'selectors' => [ '{{WRAPPER}} .newsletter-title' => 'margin-bottom: {{VALUE}}px;' ],
			]
		);
		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label'    => esc_html__( 'Heading Font', 'foxiz-core' ),
				'name'     => 'title_font',
				'selector' => '{{WRAPPER}} .newsletter-title',
			]
		);
		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '{{WRAPPER}} .newsletter-title' => 'color: {{VALUE}};' ],
			]
		);
		$this->add_control(
			'dark_heading_color',
			[
				'label'     => esc_html__( 'Dark Mode - Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '[data-theme="dark"] {{WRAPPER}} .newsletter-title, .light-scheme {{WRAPPER}} .newsletter-title' => 'color: {{VALUE}};' ],
			]
		);
		$this->end_controls_section();
		$this->start_controls_section(
			'content_section', [
				'label' => esc_html__( 'Description', 'foxiz-core' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'description_size', [
				'label'       => esc_html__( 'Description Font Size', 'foxiz-core' ),
				'type'        => Controls_Manager::NUMBER,
				'description' => esc_html__( 'Input custom font size values (in pixels) for the description of this newsletter block', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}} .newsletter-description' => 'font-size: {{VALUE}}px;' ],
			]
		);
		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'label'    => esc_html__( 'Custom Description Font', 'foxiz-core' ),
				'name'     => 'description_font',
				'selector' => '{{WRAPPER}} .newsletter-description',
			]
		);
		$this->add_control(
			'desc_color',
			[
				'label'     => esc_html__( 'Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '{{WRAPPER}}' => '--mc-desc-color : {{VALUE}};' ],
			]
		);
		$this->add_control(
			'dark_desc_color',
			[
				'label'     => esc_html__( 'Dark Mode - Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '[data-theme="dark"] {{WRAPPER}}, .light-scheme {{WRAPPER}}' => '--mc-desc-color : {{VALUE}};' ],
			]
		);
		$this->end_controls_section();
		$this->start_controls_section(
			'input_section', [
				'label' => esc_html__( 'Email Field', 'foxiz-core' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'input_size', [
				'label'       => esc_html__( 'Text Size', 'foxiz-core' ),
				'type'        => Controls_Manager::NUMBER,
				'description' => esc_html__( 'Input custom font size values (in pixels) for the text input fields of this newsletter block.', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}} input[type="text"], {{WRAPPER}} input[type="email"]' => 'font-size: {{VALUE}}px;' ],
			]
		);
		$this->add_responsive_control(
			'input_padding', [
				'label'       => esc_html__( 'Inner Padding', 'foxiz-core' ),
				'type'        => Controls_Manager::DIMENSIONS,
				'description' => esc_html__( 'Input a custom inner padding for the email field', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}}' => '--mc-input-padding: {{TOP}}px {{RIGHT}}px {{BOTTOM}}px {{LEFT}}px;' ],
			]
		);
		$this->add_control(
			'input_color',
			[
				'label'     => esc_html__( 'Input Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '{{WRAPPER}}' => '--mc-input-color: {{VALUE}};' ],
			]
		);
		$this->add_control(
			'input_bg',
			[
				'label'     => esc_html__( 'Background', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '{{WRAPPER}}' => '--mc-input-bg: {{VALUE}};' ],
			]
		);
		$this->add_control(
			'dark_input_color',
			[
				'label'     => esc_html__( 'Dark Mode - Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '[data-theme="dark"] {{WRAPPER}}, .light-scheme {{WRAPPER}}' => '--mc-input-color: {{VALUE}};' ],
			]
		);
		$this->add_control(
			'dark_input_bg',
			[
				'label'     => esc_html__( 'Dark Mode - Background', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '[data-theme="dark"] {{WRAPPER}}, .light-scheme {{WRAPPER}}' => '--mc-input-bg: {{VALUE}};' ],
			]
		);
		$this->end_controls_section();
		$this->start_controls_section(
			'submit_section', [
				'label' => esc_html__( 'Submit Button', 'foxiz-core' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'button_size', [
				'label'       => esc_html__( 'Button Font Size', 'foxiz-core' ),
				'type'        => Controls_Manager::NUMBER,
				'description' => esc_html__( 'Input custom font size values (in pixels) for the mailchimp button of this newsletter block.', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}} input[type="submit"]' => 'font-size: {{VALUE}}px;' ],
			]
		);
		$this->add_control(
			'wrap_button',
			[
				'label'        => esc_html__( 'Wrap Button', 'foxiz-core' ),
				'type'         => Controls_Manager::SELECT,
				'description'  => esc_html__( 'Select a layout for the submit button.', 'foxiz-core' ),
				'options'      => [
					'0' => esc_html__( 'Inline', 'foxiz-core' ),
					'1' => esc_html__( 'Only Mobile Wrap', 'foxiz-core' ),
					'2' => esc_html__( 'Wrap', 'foxiz-core' ),
				],
				'prefix_class' => 'submit-layout-',
				'default'      => '0',
			]
		);
		$this->add_responsive_control(
			'button_padding', [
				'label'       => esc_html__( 'Button Padding', 'foxiz-core' ),
				'type'        => Controls_Manager::DIMENSIONS,
				'description' => esc_html__( 'Input padding for the input button in wrap mode.', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}}' => '--mc-btn-padding: {{TOP}}px {{RIGHT}}px {{BOTTOM}}px {{LEFT}}px;' ],
			]
		);
		$this->add_control(
			'button_color',
			[
				'label'     => esc_html__( 'Button Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '{{WRAPPER}} input[type="submit"]:not(:hover)' => 'color: {{VALUE}};' ],
			]
		);
		$this->add_control(
			'dark_button_color',
			[
				'label'     => esc_html__( 'Dark Mode - Button Color', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '[data-theme="dark"] {{WRAPPER}} input[type="submit"]:not(:hover)' => 'color: {{VALUE}};' ],
			]
		);
		$this->add_control(
			'button_bg',
			[
				'label'     => esc_html__( 'Button Background', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '{{WRAPPER}} input[type="submit"]:not(:hover)' => 'background: {{VALUE}};' ],
			]
		);
		$this->add_control(
			'dark_button_bg',
			[
				'label'     => esc_html__( 'Dark Mode - Button Background', 'foxiz-core' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [ '[data-theme="dark"] {{WRAPPER}} input[type="submit"]:not(:hover)' => 'background: {{VALUE}};' ],
			]
		);
		$this->end_controls_section();
		$this->start_controls_section(
			'box_section', [
				'label' => esc_html__( 'Boxed', 'foxiz-core' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_responsive_control(
			'inner_padding', [
				'label'       => esc_html__( 'Inner Padding', 'foxiz-core' ),
				'type'        => Controls_Manager::DIMENSIONS,
				'description' => esc_html__( 'Input a custom inner padding (px).', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}} .newsletter-box .newsletter-inner' => 'padding: {{TOP}}px {{RIGHT}}px {{BOTTOM}}px {{LEFT}}px;' ],
			]
		);
		$this->add_responsive_control(
			'inner_gap', [
				'label'       => esc_html__( 'Inner Gap', 'foxiz-core' ),
				'type'        => Controls_Manager::NUMBER,
				'description' => esc_html__( 'Input a gap value (px) between elements.', 'foxiz-core' ),
				'selectors'   => [ '{{WRAPPER}}' => '--inner-gap: {{VALUE}}px' ],
			]
		);
		$this->add_control(
			'box_style',
			[
				'label'       => esc_html__( 'Box Style', 'foxiz-core' ),
				'type'        => Controls_Manager::SELECT,
				'description' => esc_html__( 'Select a box style.', 'foxiz-core' ),
				'options'     => [
					'shadow'    => esc_html__( 'Shadow', 'foxiz-core' ),
					'gray'      => esc_html__( 'Gray Solid', 'foxiz-core' ),
					'dark'      => esc_html__( 'Dark Solid', 'foxiz-core' ),
					'gray-dot'  => esc_html__( 'Gray Dotted', 'foxiz-core' ),
					'dark-dot'  => esc_html__( 'Dark Dotted', 'foxiz-core' ),
					'gray-dash' => esc_html__( 'Gray Dashed', 'foxiz-core' ),
					'dark-dash' => esc_html__( 'Dark Dashed', 'foxiz-core' ),
					'none'      => esc_html__( 'None', 'foxiz-core' ),
				],
				'default'     => 'gray-dash',
			]
		);
		$this->add_control(
			'border_radius',
			[
				'label'       => esc_html__( 'Border Radius', 'foxiz-core' ),
				'description' => esc_html__( 'Select a border radius value for the input text and button.', 'foxiz-core' ),
				'type'        => Controls_Manager::TEXT,
				'ai'          => [ 'active' => false ],
				'selectors'   => [ '{{WRAPPER}}' => '--round-3: {{VALUE}}px;' ],
			]
		);
		$this->add_control(
			'background',
			[
				'label'       => esc_html__( 'Background Image', 'foxiz-core' ),
				'description' => esc_html__( 'Input a background image attachment URL for the newsletter box.', 'foxiz-core' ),
				'type'        => Controls_Manager::MEDIA,
				'ai'          => [ 'active' => false ],
				'selectors'   => [ '{{WRAPPER}} .newsletter-box' => 'background-image: url("{{URL}}");' ],
			]
		);
		$this->add_control(
			'dark_background',
			[
				'label'       => esc_html__( 'Dark Mode - Background Image', 'foxiz-core' ),
				'description' => esc_html__( 'Input a background attachment URL for the newsletter box in dark mode.', 'foxiz-core' ),
				'type'        => Controls_Manager::MEDIA,
				'ai'          => [ 'active' => false ],
				'selectors'   => [ '[data-theme="dark"] {{WRAPPER}} .newsletter-box' => 'background-image: url("{{URL}}");' ],
			]
		);
		$this->end_controls_section();
		$this->start_controls_section(
			'color_section', [
				'label' => esc_html__( 'Text Color Scheme', 'foxiz-core' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);
		$this->add_control(
			'color_scheme',
			[
				'label'       => esc_html__( 'Text Color Scheme', 'foxiz-core' ),
				'type'        => Controls_Manager::SELECT,
				'description' => Options::color_scheme_description(),
				'options'     => [
					'0' => esc_html__( 'Default (Dark Text)', 'foxiz-core' ),
					'1' => esc_html__( 'Light Text', 'foxiz-core' ),
				],
				'default'     => '0',
			]
		);
		$this->end_controls_section();
	}

	protected function render() {

		if ( function_exists( 'foxiz_get_newsletter' ) ) {
			$settings            = $this->get_settings();
			$settings['uuid']    = 'uid_' . $this->get_id();
			$settings['classes'] = 'newsletter-box-1';

			echo foxiz_get_newsletter( $settings );
		}
	}
}