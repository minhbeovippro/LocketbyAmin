var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
    obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            custom_widget_frames_event: "enabled",
            streak_recovery: "enabled",
            camera_filter: "enabled",
            camera_filter_sheet: "enabled",
            camera_filter_effects: "enabled",
            premium_filters: "enabled",
            profile_theme_override: "enabled",
            calendar_friend_birthdays: "enabled",
            app_icon_alternate_collection: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true,
            custom_widget_frames_event: true,
            camera_filter: true,
            camera_filter_sheet: true,
            camera_filter_effects: true,
            profile_theme_override: true,
            calendar_friend_birthdays: true,
            app_icon_alternate_collection: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    // ============================================================
    // 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY
    // ============================================================
    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
            quality_mbps: 2.5,
            qualityMbps: 2.5
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            video_max_duration: 60.0,
            videoMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            trim_max_duration: 60.0,
            trimMaxDuration: 60.0,
            camera_roll_max_duration: 60.0,
            camera_roll_video_max_duration: 60.0,
            longer_videos_enabled: true,
            quality_mbps: 2.5,
            qualityMbps: 2.5,
            flash_button: true
        }),
        live_photos: JSON.stringify({
            capture: true,
            video: true,
            viewing: true,
            catch_up: true,
            widget_looping_mode: "never"
        }),
        camera_filter_config: JSON.stringify({
            camera_filter_storage_bucket: "gs://locket-public.locket.camera/filters",
            allows_custom_filters: true,
            show_filter_button: true,
            sheet_enabled: true,
            open_sheet_immediately: true,
            bypass_paywall: true,
            requires_gold: false,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ],
            picker_filters: [
                "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
                "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
                "tatted", "mohawk", "braces", "slimed", "princess",
                "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
                "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
                "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
                "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
            ]
        }),
        capture_classification_config: JSON.stringify({
            detection: true,                    
            debug_caption: false,               
            expanded_sheet_legacy_support: true,
            display_reaction_suggestions: true
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_max_duration: "60.0",
        camera_roll_max_duration: "60.0",
        camera_roll_duration: "60.0",
        max_video_duration: "60.0",
        video_max_duration: "60.0",
        video_trim_max_duration: "60.0",
        trim_max_duration: "60.0",
        gold_max_duration: "60.0",
        goldMaxDuration: "60.0",
        video_quality_mbps: "2.5",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "false",
        upload_main_image_quality: "2.5",
        upload_main_image_size: "4320",
        upload_thumbnail_image_quality: "2.5",
        upload_thumbnail_image_size: "1440"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999999",
        celebrity_inbox_limit: "999999999",
        celebrity_inbox_enabled: "true",
        celebrity_vip_qr_redemption_enabled: "true",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "🌟🫶🌟" }, { threshold: 2000, emoji: "✨💟✨" }, { threshold: 5000, emoji: "⚡️😵‍💫⚡" }, { threshold: 10000, emoji: "✨⚡️😱⚡✨" } ]}),
        friend_locket_count_config: JSON.stringify({ items: [ { threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 10, emoji: "🤍" }, { threshold: 100, emoji: "💛" }, { threshold: 500, emoji: "❤️‍🔥" }, { threshold: 1000, emoji: "✨💗✨" }, { threshold: 2000, emoji: "✨️⭐️✨" }, { threshold: 5000, emoji: "✨💎✨" }, { threshold: 10000, emoji: "✨🔐💛✨" } ]}),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true",
        signup_custom_profile_picture: "true",
        user_data_export_enabled: "true",
        username_suggestions_enabled: "true",
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        group_contact_invites_enabled: "true",
        groups_onboarding_accept_invite_preview_enabled: "true",
        chat_hyperlink_enabled_mode: "always_enabled",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        conversation_drafts_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "true",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "true",
        rollcall_tap_to_tag_enabled: "true",
        chat_translation_enabled: "true"
    });

    // ============================================================
    // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (JOURNAL / PROFILE)
    // ============================================================
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "10",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "true",
        app_icon_alternate_collection: JSON.stringify([
            "default", "gold", "dark", "halloween_2026", "lunar_new_year", "testflight"
        ]),
        widget_sync_token_reload_mode: "clearTokenNever",
        widget_frame_event: JSON.stringify({
            uid: "halloween_2026",
            url: "https://i.ibb.co/RTm5P1n9/kitty-1.png",
            use_local_time_zone: true,
            placement: "below",
            start_at: "2024-01-01T00:00:00",
            end_at: "2099-11-30T23:59:59"
        }),
        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: true,
            compact_header: true,
            friends_button: true,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true",
        calendar_friend_birthdays: JSON.stringify({
             fetching: true,
             calendar_display: true,
             feature_popup: true,
             settings_visibility_toggle_enabled: true,
             fetch_ttl_seconds: 86400 
         }),
    });

    
    // ============================================================
    // 7. HỆ THỐNG, CACHE & STORAGE CDN
    // ============================================================
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "315360000",
        image_cache_max_size: "800000000",
        history_cache_age_days: "3650",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true",
        preload_history_moments: "true"
    });

    // ============================================================
    // 8. OVERLAY & CUSTOM CAPTIONS
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "star_sign", "party_time", "locket_count",
            "good_morning", "goodnight", "ootd", "miss_you", "custom", "halloween_2026"
        ]),
        overlay_items: JSON.stringify([
            {
                section: "General",
                items: [
                    { overlay_id: "caption:standard", source: "local", caption: { type: "standard" } },
                    { overlay_id: "caption:link", source: "local", caption: { type: "link" } },
                    { overlay_id: "caption:review", source: "local", caption: { type: "review" } },
                    { overlay_id: "caption:poll", source: "local", caption: { type: "poll" } },
                    { overlay_id: "caption:music", source: "local", caption: { type: "music" } },
                    { overlay_id: "caption:location", source: "local", caption: { type: "location" } },
                    { overlay_id: "caption:weather", source: "local", caption: { type: "weather" } },
                    { overlay_id: "caption:time", source: "local", caption: { type: "time" } },
                    { overlay_id: "caption:streak", source: "local", caption: { type: "streak" } },
                    { overlay_id: "caption:star_sign", source: "local", caption: { type: "star_sign" } },
                    { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
                    { overlay_id: "caption:quote", source: "local", caption: { type: "quote" } },
                    { overlay_id: "caption:breaking_news", source: "local", caption: { type: "breaking_news" } },
                    { overlay_id: "caption:locket_count", source: "local", caption: { type: "locket_count" } },
                    {"overlay_id":"caption:live","source":"local","caption":{"type":"live"}}
                ]
            },
            {
                section: "Holiday Caption",
                items: [
                    {"overlay_id":"caption:tet_nguyen_dan_2027","source":"remote","caption":{"background":{"colors":["#E53935","#D32F2F"]},"icon":{"data":"🧧","type":"emoji"},"max_lines":1,"text":"Chúc Mừng Năm Mới","localized_text":{"en":"Happy Lunar New Year","vn":"Chúc Mừng Năm Mới"},"text_color":"#FFD700","type":"static_content"}},
                    {"overlay_id":"caption:valentine_2027","source":"remote","caption":{"background":{"colors":["#FF758C","#FF7EB3"]},"icon":{"data":"💖","type":"emoji"},"max_lines":1,"text":"Valentine Ấm Áp","localized_text":{"en":"Happy Valentine's Day","vn":"Valentine Ấm Áp"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:quoc_te_phu_nu_8_3","source":"remote","caption":{"background":{"colors":["#F953C6","#B91D73"]},"icon":{"data":"💐","type":"emoji"},"max_lines":1,"text":"Quốc Tế Phụ Nữ 8/3","localized_text":{"en":"Happy Women's Day","vn":"Quốc Tế Phụ Nữ 8/3"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:gio_to_hung_vuong","source":"remote","caption":{"background":{"colors":["#8B0000","#4A0000"]},"icon":{"data":"👑","type":"emoji"},"max_lines":1,"text":"Giỗ Tổ Hùng Vương","localized_text":{"en":"Hung Kings Commemoration","vn":"Giỗ Tổ Hùng Vương"},"text_color":"#FFD700","type":"static_content"}},
                    {"overlay_id":"caption:giai_phong_mien_nam_30_4","source":"remote","caption":{"background":{"colors":["#D32F2F","#1976D2"]},"icon":{"data":"⭐","type":"emoji"},"max_lines":1,"text":"Mừng Ngày Giải Phóng 30/4","localized_text":{"en":"Reunification Day","vn":"Mừng Ngày Giải Phóng 30/4"},"text_color":"#FFFF00","type":"static_content"}},
                    {"overlay_id":"caption:quoc_te_lao_dong_1_5","source":"remote","caption":{"background":{"colors":["#11998E","#38EF7D"]},"icon":{"data":"🌴","type":"emoji"},"max_lines":1,"text":"Quốc Tế Lao Động 1/5","localized_text":{"en":"International Workers' Day","vn":"Quốc Tế Lao Động 1/5"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:quoc_te_thieu_nhi_1_6","source":"remote","caption":{"background":{"colors":["#FF9A8E","#FECFEF"]},"icon":{"data":"🎈","type":"emoji"},"max_lines":1,"text":"Quốc Tế Thiếu Nhi 1/6","localized_text":{"en":"Children's Day","vn":"Quốc Tế Thiếu Nhi 1/6"},"text_color":"#6D214F","type":"static_content"}},
                    {"overlay_id":"caption:dieu_trieu_ngay_he","source":"remote","caption":{"background":{"colors":["#00B4DB","#0083B0"]},"icon":{"data":"☀️","type":"emoji"},"max_lines":1,"text":"Xin Chào Mùa Hè","localized_text":{"en":"Hello Summer","vn":"Xin Chào Mùa Hè"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:quoc_khanh_2_9","source":"remote","caption":{"background":{"colors":["#DE0808","#8F0000"]},"icon":{"data":"🇻🇳","type":"emoji"},"max_lines":1,"text":"Mừng Quốc Khánh 2/9","localized_text":{"en":"Vietnam National Day","vn":"Mừng Quốc Khánh 2/9"},"text_color":"#FFFF00","type":"static_content"}},
                    {"overlay_id":"caption:trung_thu_2026","source":"remote","caption":{"background":{"colors":["#1F1C2C","#928DAB"]},"icon":{"data":"🥮","type":"emoji"},"max_lines":1,"text":"Tết Trung Thu","localized_text":{"en":"Mid-Autumn Festival","vn":"Tết Trung Thu"},"text_color":"#FFD700","type":"static_content"}},
                    {"overlay_id":"caption:phu_nu_viet_nam_20_10","source":"remote","caption":{"background":{"colors":["#FF416C","#FF4B2B"]},"icon":{"data":"🌹","type":"emoji"},"max_lines":1,"text":"Phụ Nữ Việt Nam 20/10","localized_text":{"en":"Vietnamese Women's Day","vn":"Phụ Nữ Việt Nam 20/10"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:halloween_2026","source":"remote","caption":{"background":{"colors":["#150804","#C8540D"]},"icon":{"data":"https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/halloween_indicator%403x.png","source":"url","type":"image"},"max_lines":1,"text":"Halloween","localized_text":{"en":"Halloween","vn":"Halloween"},"text_color":"#FFB182","type":"static_content"}},
                    {"overlay_id":"caption:nha_giao_viet_nam_20_11","source":"remote","caption":{"background":{"colors":["#4E54C8","#8F94FB"]},"icon":{"data":"🎓","type":"emoji"},"max_lines":1,"text":"Tri Ân Thầy Cô 20/11","localized_text":{"en":"Teacher's Day","vn":"Tri Ân Thầy Cô 20/11"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:autumn_2026","source":"remote","caption":{"background":{"colors":["#FFE0A0","#F6A53A"]},"icon":{"data":"🍂","type":"emoji"},"max_lines":1,"text":"Xin chào Mùa Thu","localized_text":{"en":"Xin chào Mùa Thu","vn":"Xin chào Mùa Thu"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:christmas_eve_2026","source":"remote","caption":{"background":{"colors":["#2FA85F","#176B3A"]},"icon":{"data":"🕯️","type":"emoji"},"max_lines":1,"text":"Giáng sinh an lành","localized_text":{"en":"Giáng sinh an lành","vn":"Giáng sinh an lành"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:christmas_day_2026","source":"remote","caption":{"background":{"colors":["#E53935","#A81818"]},"icon":{"data":"🎄","type":"emoji"},"max_lines":1,"text":"Giáng sinh an lành","localized_text":{"en":"Giáng sinh an lành","vn":"Giáng sinh an lành"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:new_years_eve_2026","source":"remote","caption":{"background":{"colors":["#FFC64B","#FFEDBF"]},"icon":{"data":"🥂","type":"emoji"},"max_lines":1,"text":"Xin chào 2027!","localized_text":{"en":"Xin chào 2027!","vn":"Xin chào 2027!"},"text_color":"#643F00","type":"static_content"}},
                    {"overlay_id":"caption:new_years_day_2027","source":"remote","caption":{"background":{"colors":["#3B00EC","#823FFF"]},"icon":{"data":"💫","type":"emoji"},"max_lines":1,"text":"Xin chào 2027!","localized_text":{"en":"Xin chào 2027!","vn":"Xin chào 2027!"},"text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:new_years_day_2027_alternate","source":"remote","caption":{"background":{"colors":["#FF0062","#FF783F"]},"max_lines":1,"text":"2027","text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:no_memory","source":"remote","caption":{"background":{"colors":["#1A1A2E","#16213E"],"image":{"data":"https://public.locketcamera.com/locket-public/overlays/forgotten_island/forgotten_island_bg.png","source":"url","type":"image"}},"max_lines":1,"text":"NO MEMORY LEFT BEHIND","text_color":"#FFFFFFE6","type":"static_content"}}
                ]
            },
            {
                section: "Decorative by Locket",
                items: [
                    { overlay_id: "caption:party_time", source: "remote", caption: { background: { colors: ["#5EFFF5", "#FCFF57"] }, icon: { data: "🪩", type: "emoji" }, max_lines: 1, text: "Party Time!", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "caption:good_morning", source: "remote", daily_start_hour: 5, daily_end_hour: 10, caption: { background: { colors: ["#EF7402", "#EABF0F"] }, icon: { data: "☀️", type: "emoji" }, max_lines: 1, text: "Good morning", text_color: "#FFFFFFE5", type: "static_content" } },
                    { overlay_id: "caption:goodnight", source: "remote", daily_start_hour: 20, daily_end_hour: 24, caption: { background: { colors: ["#370C6F", "#575CD4"] }, icon: { data: "🌙", type: "emoji" }, max_lines: 1, text: "Goodnight", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:miss_you", source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Miss you", text_color: "#FFFFFFDB", type: "static_content" } },
                    { overlay_id: "caption:ootd", source: "remote", caption: { background: { colors: ["#FFFFFF", "#DBDBDB"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "OOTD", text_color: "#101010E6", type: "static_content" } },
                ]
            },
            {
                section: "Decorative by amin",
                items: [
                    { overlay_id: "caption:feeling_cute", source: "remote", caption: { background: { colors: ["#FFB6C1", "#FF69B4"] }, icon: { data: "🌷", type: "emoji" }, max_lines: 1, text: "Feeling cute", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:wedding_time", source: "remote", caption: { background: { colors: ["#FFE4E1", "#FF6B6B"] }, icon: { data: "💍", type: "emoji" }, max_lines: 1, text: "Wedding Time", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:locket_time", source: "remote", caption: { background: { colors: ["#FF4E50", "#F9D423"] }, icon: { data: "📷", type: "emoji" }, max_lines: 1, text: "Locket Time", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:cinema_time", source: "remote", caption: { background: { colors: ["#2C3E50", "#000000"] }, icon: { data: "🎬", type: "emoji" }, max_lines: 1, text: "Cinema Time", text_color: "#ECF0F1", type: "static_content" } },
                    { overlay_id: "caption:coffee_time", source: "remote", caption: { background: { colors: ["#A0522D", "#3D2314"] }, icon: { data: "☕️", type: "emoji" }, max_lines: 1, text: "Coffee Time", text_color: "#FDF5E6", type: "static_content" } },
                    { overlay_id: "caption:chilling_time", source: "remote", caption: { background: { colors: ["#00C9FF", "#92FE9D"] }, icon: { data: "🌴", type: "emoji" }, max_lines: 1, text: "Chilling Time", text_color: "#1F2937", type: "static_content" } },
                    { overlay_id: "caption:dating_time", source: "remote", caption: { background: { colors: ["#FF758C", "#FF7EB3"] }, icon: { data: "💕", type: "emoji" }, max_lines: 1, text: "Dating Time", text_color: "#FFFFFF", type: "static_content" } },
                ]
            },
            {
                section: "GenZ",
                items: [
                    {"overlay_id":"caption:genz_chan_bo_nay_di","source":"remote","caption":{"background":{"colors":["#1E1E24","#44107A"]},"icon":{"data":"🔫","type":"emoji"},"max_lines":1,"text":"chán bố này đi","text_color":"#00FFCC","type":"static_content"}},
                    {"overlay_id":"caption:genz_sao_sao_sao","source":"remote","caption":{"background":{"colors":["#FF4E50","#F9D423"]},"icon":{"data":"🤪","type":"emoji"},"max_lines":1,"text":"sao sao sao","text_color":"#1A1A1A","type":"static_content"}},
                    {"overlay_id":"caption:genz_ngao_a","source":"remote","caption":{"background":{"colors":["#8E2DE2","#4A00E0"]},"icon":{"data":"🤡","type":"emoji"},"max_lines":1,"text":"ngáo à","text_color":"#00FF66","type":"static_content"}},
                    {"overlay_id":"caption:genz_ngan","source":"remote","caption":{"background":{"colors":["#1F1C2C","#928DAB"]},"icon":{"data":"🫠","type":"emoji"},"max_lines":1,"text":"ngẫn","text_color":"#E0E5FF","type":"static_content"}},
                    {"overlay_id":"caption:genz_thich_thiiii","source":"remote","caption":{"background":{"colors":["#FF0844","#FFB199"]},"icon":{"data":"🥰","type":"emoji"},"max_lines":1,"text":"thích thíííí","text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:genz_tuat","source":"remote","caption":{"background":{"colors":["#11998E","#38EF7D"]},"icon":{"data":"🐶","type":"emoji"},"max_lines":1,"text":"tuất","text_color":"#05261E","type":"static_content"}},
                    {"overlay_id":"caption:genz_ba_khi","source":"remote","caption":{"background":{"colors":["#0F0C20","#240B36"]},"icon":{"data":"👑","type":"emoji"},"max_lines":1,"text":"bá khí","text_color":"#FFD700","type":"static_content"}},
                    {"overlay_id":"caption:genz_ua_alo","source":"remote","caption":{"background":{"colors":["#5C258D","#4389A2"]},"icon":{"data":"🧏‍♀️","type":"emoji"},"max_lines":1,"text":"ủa, alo?","text_color":"#FFFF00","type":"static_content"}},
                    {"overlay_id":"caption:genz_hao_han","source":"remote","caption":{"background":{"colors":["#F12711","#F5AF19"]},"icon":{"data":"🔥","type":"emoji"},"max_lines":1,"text":"hảo hán","text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:genz_bien_ooooi","source":"remote","caption":{"background":{"colors":["#00B4DB","#0083B0"]},"icon":{"data":"🌊","type":"emoji"},"max_lines":1,"text":"biển ơiiiiiiiii","text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:genz_tuong_love","source":"remote","caption":{"background":{"colors":["#3A1C71","#D76D77","#FFAF7B"]},"icon":{"data":"🛵","type":"emoji"},"max_lines":1,"text":"tưởng love hóa ra là lốp","text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:genz_xinh_dep","source":"remote","caption":{"background":{"colors":["#FA709A","#FEE140"]},"icon":{"data":"✨","type":"emoji"},"max_lines":1,"text":"xinh đẹp tuyệt vời","text_color":"#4A0E17","type":"static_content"}},
                    {"overlay_id":"caption:genz_ngoan_xinh_yeu","source":"remote","caption":{"background":{"colors":["#FF758C","#FF7EB3"]},"icon":{"data":"🧸","type":"emoji"},"max_lines":1,"text":"ngoan xinh yêu của ai đây","text_color":"#FFFFFF","type":"static_content"}},
                    {"overlay_id":"caption:genz_tinh_hoa_hoi_tu","source":"remote","caption":{"background":{"colors":["#833AB4","#FD1D1D","#FCB045"]},"icon":{"data":"🌟","type":"emoji"},"max_lines":1,"text":"tinh hoa hội tụ","text_color":"#FFFFFF","type":"static_content"}}
                ]
            },
            
        ])
    }); 
}
$done({ body: JSON.stringify(obj) });
