<?php
/** Don't load directly */
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'foxiz_register_options_socials' ) ) {
	/**
	 * @return array
	 */
	function foxiz_register_options_socials() {

		return [
			'id'     => 'social_theme_options_section_socials',
			'title'  => esc_html__( 'Social Profiles', 'foxiz' ),
			'icon'   => 'el el-facebook',
			'desc'   => esc_html__( 'Adding social profiles for your site.', 'foxiz' ),
			'fields' => [
				[
					'id'    => 'info_user_socials',
					'type'  => 'info',
					'style' => 'warning',
					'desc'  => esc_html__( 'The settings below are used for the your website. To add socials for a user, Navigate to the "Users -> Profile".', 'foxiz' ),
				],
				[
					'id'    => 'info_social_profiles',
					'type'  => 'info',
					'style' => 'info',
					'desc'  => esc_html__( 'Leave the settings blank to disable them.', 'foxiz' ),
				],
				[
					'id'     => 'section_start_socials',
					'type'   => 'section',
					'class'  => 'ruby-section-start',
					'title'  => esc_html__( 'Social Profiles', 'foxiz' ),
					'indent' => true,
				],
				[
					'id'       => 'facebook',
					'type'     => 'text',
					'title'    => esc_html__( 'Facebook URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
					'default'  => '#',
				],
				[
					'id'       => 'twitter',
					'type'     => 'text',
					'title'    => esc_html__( 'Twitter URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
					'default'  => '#',
				],
				[
					'id'       => 'youtube',
					'type'     => 'text',
					'title'    => esc_html__( 'Youtube URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
					'default'  => '',
				],
				[
					'id'       => 'googlenews',
					'type'     => 'text',
					'title'    => esc_html__( 'Google News URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
					'default'  => '',
				],
				[
					'id'       => 'instagram',
					'type'     => 'text',
					'title'    => esc_html__( 'Instagram URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'pinterest',
					'type'     => 'text',
					'title'    => esc_html__( 'Pinterest URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
					'default'  => '',
				],
				[
					'id'       => 'linkedin',
					'type'     => 'text',
					'title'    => esc_html__( 'LinkedIn URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'tumblr',
					'type'     => 'text',
					'title'    => esc_html__( 'Tumblr URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'flickr',
					'type'     => 'text',
					'title'    => esc_html__( 'Flickr URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'skype',
					'type'     => 'text',
					'title'    => esc_html__( 'Skype URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'snapchat',
					'type'     => 'text',
					'title'    => esc_html__( 'Snapchat URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'myspace',
					'type'     => 'text',
					'title'    => esc_html__( 'Myspace URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'bloglovin',
					'type'     => 'text',
					'title'    => esc_html__( 'Bloglovin URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'digg',
					'type'     => 'text',
					'title'    => esc_html__( 'Digg URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'dribbble',
					'type'     => 'text',
					'title'    => esc_html__( 'Dribbble URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'soundcloud',
					'type'     => 'text',
					'title'    => esc_html__( 'Soundcloud URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'vimeo',
					'type'     => 'text',
					'title'    => esc_html__( 'Vimeo URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'reddit',
					'type'     => 'text',
					'title'    => esc_html__( 'Reddit URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'vk',
					'type'     => 'text',
					'title'    => esc_html__( 'VKontakte URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'telegram',
					'type'     => 'text',
					'title'    => esc_html__( 'Telegram URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'whatsapp',
					'type'     => 'text',
					'title'    => esc_html__( 'Whatsapp URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'rss',
					'type'     => 'text',
					'title'    => esc_html__( 'Rss URL ', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'     => 'section_end_socials',
					'type'   => 'section',
					'class'  => 'ruby-section-end',
					'indent' => false,
				],
				[
					'id'       => 'section_start_custom_social_1',
					'type'     => 'section',
					'class'    => 'ruby-section-start',
					'title'    => esc_html__( 'Custom Social 1', 'foxiz' ),
					'subtitle' => esc_html__( 'Ensure "Theme Design > Font Awesome" setting is enabled in if you use the Font Awesome icons.', 'foxiz' ),
					'indent'   => true,
				],
				[
					'id'       => 'custom_social_1_url',
					'type'     => 'text',
					'title'    => esc_html__( 'Custom social 1 - URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'          => 'custom_social_1_name',
					'type'        => 'text',
					'title'       => esc_html__( 'Custom Social 1 - Name', 'foxiz' ),
					'subtitle'    => esc_html__( 'Input the name of the social, e.g. , twitter.', 'foxiz' ),
					'placeholder' => esc_html__( 'facebook', 'foxiz' ),
				],
				[
					'id'          => 'custom_social_1_icon',
					'type'        => 'text',
					'title'       => esc_html__( 'Custom Social 1 - Icon', 'foxiz' ),
					'placeholder' => esc_html__( 'fab fa-facebook', 'foxiz' ),
					'subtitle'    => esc_html__( 'Input the name of font icon', 'foxiz' ),
					'default'     => '',
				],
				[
					'id'          => 'custom_social_1_color',
					'type'        => 'color',
					'transparent' => false,
					'validate'    => 'color',
					'title'       => esc_html__( 'Custom Social 1 - Color', 'foxiz' ),
					'subtitle'    => esc_html__( 'Select a color for this social icon.', 'foxiz' ),
				],
				[
					'id'     => 'section_end_custom_social_1',
					'type'   => 'section',
					'class'  => 'ruby-section-end',
					'indent' => false,
				],
				[
					'id'     => 'section_start_custom_social_2',
					'type'   => 'section',
					'class'  => 'ruby-section-start',
					'title'  => esc_html__( 'Custom Social 2', 'foxiz' ),
					'indent' => true,
				],
				[
					'id'       => 'custom_social_2_url',
					'type'     => 'text',
					'title'    => esc_html__( 'Custom social 2 - URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'custom_social_2_name',
					'type'     => 'text',
					'title'    => esc_html__( 'Custom Social 2 - Name', 'foxiz' ),
					'subtitle' => esc_html__( 'Input the name of the social.', 'foxiz' ),
				],
				[
					'id'       => 'custom_social_2_icon',
					'type'     => 'text',
					'title'    => esc_html__( 'Custom Social 2 - Icon', 'foxiz' ),
					'subtitle' => esc_html__( 'Input the name of font icon.', 'foxiz' ),
					'default'  => '',
				],
				[
					'id'          => 'custom_social_2_color',
					'type'        => 'color',
					'transparent' => false,
					'validate'    => 'color',
					'title'       => esc_html__( 'Custom Social 2 - Color', 'foxiz' ),
					'subtitle'    => esc_html__( 'Select a color for this social icon.', 'foxiz' ),
				],
				[
					'id'     => 'section_end_custom_social_2',
					'type'   => 'section',
					'class'  => 'ruby-section-end',
					'indent' => false,
				],
				[
					'id'     => 'section_start_custom_social_3',
					'type'   => 'section',
					'class'  => 'ruby-section-start',
					'title'  => esc_html__( 'Custom Social 2', 'foxiz' ),
					'indent' => true,
				],
				[
					'id'       => 'custom_social_3_url',
					'type'     => 'text',
					'title'    => esc_html__( 'Custom social 3 - URL', 'foxiz' ),
					'subtitle' => esc_html__( 'Input your social profile URL.', 'foxiz' ),
				],
				[
					'id'       => 'custom_social_3_name',
					'type'     => 'text',
					'title'    => esc_html__( 'Custom Social 3 - Name', 'foxiz' ),
					'subtitle' => esc_html__( 'Input the name of the social.', 'foxiz' ),
				],
				[
					'id'       => 'custom_social_3_icon',
					'type'     => 'text',
					'title'    => esc_html__( 'Custom Social 3 - Icon', 'foxiz' ),
					'subtitle' => esc_html__( 'Input the name of font icon.', 'foxiz' ),
					'default'  => '',
				],
				[
					'id'          => 'custom_social_3_color',
					'type'        => 'color',
					'transparent' => false,
					'validate'    => 'color',
					'title'       => esc_html__( 'Custom Social 3 - Color', 'foxiz' ),
					'subtitle'    => esc_html__( 'Select a color for this social icon.', 'foxiz' ),
				],
				[
					'id'     => 'section_end_custom_social_3',
					'type'   => 'section',
					'class'  => 'ruby-section-end no-border',
					'indent' => false,
				],
			],
		];
	}
}