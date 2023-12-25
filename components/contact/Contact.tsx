import { Loader } from '@components/loader/Loader';
import React, { useState, useEffect, useRef } from 'react';
import styles from './contact.module.scss';

export const Contact = () => {
    const [height, setHeight] = useState(0);
    const elementRef = useRef<any>(null);

    console.log("height",height)

    useEffect(() => {
        setTimeout(() => {
            setHeight(elementRef?.current?.clientHeight);
        }, 3000);
    }, []);

    var DpNewTicket_Options: any = {};
    DpNewTicket_Options.protocol = 'https:' == document.location.protocol ? 'https' : 'http';
    DpNewTicket_Options.deskproUrl = DpNewTicket_Options.protocol + '://helpdesk.filesmart.tax/';
    DpNewTicket_Options.initialHeight = 700;
    DpNewTicket_Options.containerId = 'dp_newticket_form';
    DpNewTicket_Options.departmentId = 6;

    /**
     * The Language ID to load for users with no language preference
     */
    DpNewTicket_Options.languageId = 0;

    /**
     * If the user name is already known, you can set it here.
     * When set, the name field is hidden in the form.
     */
    DpNewTicket_Options.formUserName = '{{full_name}}';

    /**
     * If the user email is already known, you can set it here.
     * When set, the email field is hidden in the form.
     */

    DpNewTicket_Options.formUserEmail = '{{user_email}}';
    if (document.getElementsByTagName) {
        (window as any).DpNewTicket_Options = DpNewTicket_Options;
        (function () {
            var scr = document.createElement('script');
            scr.type = 'text/javascript';
            scr.async = true;
            scr.src =
                DpNewTicket_Options.protocol +
                '://helpdesk.filesmart.tax/web/javascripts/DeskPRO/User/TicketFormWidget/TicketFormWidget.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(scr);
        })();
    }

    return (
        <div className={styles.contactUs}>
            {height === 0 ? (
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader}>
                        <Loader></Loader>
                    </div>
                </div>
            ) : (
                <div id="dp_newticket_form" style={{ display: 'none' }} ref={elementRef}></div>
            )}
        </div>
    );
};
