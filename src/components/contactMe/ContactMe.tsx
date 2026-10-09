import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { playClickSound } from '../../utils/sound';
import './ContactMe.css';

export const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/kanhaiyakumar25213@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Hire Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (_err) {
      window.location.href = `mailto:kanhaiyakumar25213@gmail.com?subject=Hire Request from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      setSubmitStatus('success');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-me-section" id="contact">
      <div className="contact-white-card-container">
        <h2 className="contact-card-title font-serif-title">Send a Message</h2>
        <p className="contact-card-subtitle font-inter">
          Want to hire me for gigs, full-time, or part-time roles? Fill out the form and I'll get back to you within 24 hours.
        </p>

        {submitStatus === 'success' ? (
          <div className="contact-success-msg font-inter">
            <FaCheckCircle className="success-icon" />
            <span>Thank you! Your message has been sent. I will get back to you shortly.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form-box font-inter">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input-field"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input-field"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="contact-textarea-field"
              />
            </div>

            {submitStatus === 'error' && (
              <p className="contact-error-msg">
                Could not send via automated form. Opening your mail app instead...
              </p>
            )}

            <button type="submit" disabled={isSubmitting} className="contact-send-btn">
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FaArrowRight className="send-btn-arrow" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactMe;
